import NextLink from 'next/link'
import type {ComponentPropsWithoutRef, ElementType} from 'react'

// We can use a <a>, <button>, or <NextLink>...or undefined.
type BaseElementType
= (ElementType & ('button' | 'a')) | typeof NextLink | undefined

// The above undefined falls back to <button>.
type BaseElementFallback<El extends BaseElementType>
= El extends undefined ? 'button' : El

// Base custom props for the component.
interface PressableBase<El extends BaseElementType> {
	base?: El,
	disabled?: boolean,
}

// Combine inferred component props with the base props.
type PressableProps<El extends BaseElementType>
= PressableBase<El> & ComponentPropsWithoutRef<BaseElementFallback<El>>

/* / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
Pressable
---------
This generic component can slot in a link or button easily.
Sometimes it makes more sense, especially when making
	custom Buttons or other pressable actions.
The consumers can then always choose the base element type.

The logic here may be daunting, but I've added assertions
	to help you make sense of it all.
/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / */
const Pressable = <El extends BaseElementType = 'button'> ({
	base,
	disabled, // Omit this from (most of) the returned JSX.
	...props
}: PressableProps<El>) => {
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
		/* / / / / / / / / / / / / / / / / / / / / / / / / / / /
		Technically, there is no such thing as a disabled link,
			whether that's a NextJS Link or an HTML anchor.
		So what we do here, is to return a link with no href
			to mock the behavior of what a disabled link might do.
		Also, since a NextJS Link needs an href, we always
			return an HTML anchor to emulate the desired behavior,
			even if a NextJS Link was specified as the base prop.
		/ / / / / / / / / / / / / / / / / / / / / / / / / / / */
		return (
			<a // Using <a>, not <Link>
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
				href = {props.href}
			/>
		)
	}
}

export {Pressable}
export type {PressableProps, BaseElementType}
