import NextLink from 'next/link'
import type {
	ComponentPropsWithoutRef,
	ElementType,
} from 'react'

// We can use a <a>, <button>, or <NextLink>...or undefined.
type BaseElement
= (ElementType & ('button' | 'a'))
| typeof NextLink
| undefined

// When fed an undefined "Core Element" type (as above),
//  this falls back onto using <button> as the core element.
type Fallback<El extends BaseElement>
= El extends undefined ? 'button' : El

// Base custom props for the component.
interface PressableBase<El extends BaseElement> {
	base?: El,
	disabled?: boolean,
}

// Combine inferred component props with the base props.
type PressableProps<El extends BaseElement>
= PressableBase<El>
& ComponentPropsWithoutRef<Fallback<El>>

/***********************************************************
Pressable
=========
The generic `<Pressable />` component is meant to centralize
	the use of anchors, links, and buttons.
This is done in hopes of compartmentalizing and unifying
	custom link and button styles for a cleaner looking site.

For example, sometimes it just makes more sense to style an
	anchor link as if it were a button.
In rarer situations, you could even use an inline button,
	which appears as a link.

Usage
-----
This conditionally selects other pressable components
	to use, based upon the provided `base` argument.
If you provide no arguments, then the system will default to
	using a regular button element for the base property.

Styling Options
---------------
This component looks and acts like a normal link or anchor.
If `"button"` is supplied as the base, however, then the
	component will look like a link with a double-underline.
This is the only stylistic deviation with the base options.

Developer Notes
---------------
I've added some `console.assert` statements between the
	different conditional blocks.
This should help you play around with prop types!

The `PressableProps` type is admittedly fairly complex.
Essentially, it conditionally extends the anchor props if
	`a` is fed as the base, button props if `button` is given,
	and even `NextLink` props if that component is given.

This is a trade-off that I was willing to make, to ensure
	deep type comprehension throughout my project space.
***********************************************************/
const Pressable = <El extends BaseElement = 'button'> ({
	base,
	disabled, // Omit this from (most of) the returned JSX.
	...props
}: PressableProps<El>) => {
	// Conditionally decide which element/component to use.
	if (base === 'button' || base == null) {
		return (
			<button
				draggable = {disabled !== true} // Can be overriden.
				{...props}
				disabled = {disabled}
			/>
		)
	}

	// console.assert(base === 'a' || base == NextLink)
	else if (disabled === true || props.href == null) {
		/*
		Technically, there is no such thing as a disabled link,
			whether that's a NextJS Link or an HTML anchor.
		So what we do here, is to return a link with no href
			to mock the behavior of what a disabled link might do.
		Also, since a NextJS Link needs an href, we always
			return an HTML anchor to emulate the desired behavior,
			even if a NextJS Link was specified as the base prop.
		*/
		return (
			<a // Using <a>, not <NextLink>
				{...props}
				href = {undefined}
			/>
		)
	}

	// console.assert(disabled === false || disabled == null)
	else if (base === 'a') {
		return (
			<a {...props} />
		)
	}

	// console.assert(base == NextLink)
	else {
		return (
			<NextLink
				{...props}
				href = {props.href} // `href` is defined.
			/>
		)
	}
}

export {Pressable}
export type {PressableProps, BaseElement}
