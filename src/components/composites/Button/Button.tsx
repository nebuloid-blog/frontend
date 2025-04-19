import {Pressable} from '@components/Pressable'
import {
	combineClassNames,
} from '@helpers/combine-class-names'

import styles from './Button.module.scss'

import type {level} from '@app/types/colors'
import type {
	BaseElement,
	PressableProps,
} from '@components/Pressable'


// Base custom props for the component.
interface ButtonBase {
	color?: level | 'link',
}

// Combine extended props with the base props above.
type ButtonProps<El extends BaseElement>
= ButtonBase & PressableProps<El>

/***********************************************************
Button
======
The `<Button />` component builds upon a similar generic
	component in the workspace, `<Pressable />`.
Simply put, the difference is all in styling.
- `<Button />` is formatted like a block element.
- `<Pressable />` is formatted like an inline element.

There's a benefit to having this, where it is easy to
	make links look like buttons, and buttons look like links.

Styling Options
---------------
You can access all features of the extended component, plus
	add some coloring options, as seen in the prop types.
- `{color: 'primary'}` will show as a boldly colored button.
- `{color: 'secondary'}` will show as an outlined button.
- `{color: 'tertiary'}` will show as a block-styled link.
- `{color: 'link'}` is an alias for `'tertiary'`.

TypeScript Quirks
-----------------
TypeScript was misbehaving, so I could not use something
	like `{color, ...props}` to deconstruct component props.
To work around this, I simply did not deconstruct props.
The problem stems from extending the type `PressableProps`.
This type was already fairly complex, so it's not surprising
	that its a fragile  to extend with in TypeScript.
I believe this is a limitation of TypeScript, but if there
	are ways to improve, please open an issue for me!
***********************************************************/
const Button = <El extends BaseElement> ({
	color = 'primary',
	...props
}: ButtonProps<El>) => {
	// Here, the color property of "link" is just an alias
	//  for the color property of "tertiary".
	if (color === 'link') color = 'tertiary'

	// Determine whether to reset the styles of the button.
	let resetStyles
	if (color !== 'tertiary') resetStyles = 'reset'

	return (
		/* @ts-expect-error: `color` shan't be a prop! */
		<Pressable
			{...props}
			className = {
				combineClassNames([
					resetStyles,
					styles.root,
					styles[color],
					props.className,
				])
			}
		/>
	)
}

export {Button}
export type {BaseElement, ButtonProps}
