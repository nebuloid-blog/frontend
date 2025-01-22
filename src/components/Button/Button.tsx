import {Pressable} from '@components/Pressable'
import {combineClassNames} from '@utilities/combine-class-names'
import styles from './Button.module.scss'
import type {PressableProps, BaseElementType} from '@components/Pressable'
import type {level} from '@nebuloid-types/colors'

interface ButtonBase {
	color?: level | 'link',
}

type ButtonProps<El extends BaseElementType>
= ButtonBase & PressableProps<El>

const Button = <El extends BaseElementType> ({
	color = 'primary',
	...props
}: ButtonProps<El>) => {
	// Here, the value "link" is just an alias for "tertiary".
	if (color === 'link') color = 'tertiary'

	return (
		<Pressable
			{...props}
			className = {
				combineClassNames([
					color !== 'tertiary' && 'reset',
					styles.root,
					styles[color],
					props.className,
				])
			}
		/>
	)
}

export {Button}
export type {ButtonProps, BaseElementType}
