import type {ComponentPropsWithoutRef, ElementType} from 'react'
import Link from 'next/link'
import styles from './Button.module.scss'
import type {level} from '@nebuloid-types/colors'
import {combineClassNames} from '@utilities/combine-class-names'

interface BaseProps<El extends BaseElementType> {
	base?: El,
	color?: level | 'link',
	disabled?: boolean,
}

type BaseElementType
= (ElementType & ('button' | 'a')) | typeof Link | undefined

type DefaultElement<El extends BaseElementType>
= El extends undefined ? 'button' : El

type ButtonProps<El extends BaseElementType = BaseElementType>
= BaseProps<El>
& ComponentPropsWithoutRef<DefaultElement<El>>

const Button
= <El extends BaseElementType = 'button'> ({
	color,
	disabled,
	...props
}: ButtonProps<El>) => {
	const Base: NonNullable<BaseElementType> = props.base ?? 'button'

	// Infer draggable and disabled state from component context.
	if (Base !== 'button' && props.href == null) disabled = true
	const draggable = disabled !== true

	// Infer styling information from component context.
	if (color === 'link') color = 'tertiary'
	color ??= 'primary'

	const className = combineClassNames([
		color !== 'tertiary' && 'reset',
		styles.root,
		styles[color],
		disabled === true && styles.disabled,
		props.className,
	])

	// Return the respective component based on given props.
	if (Base === 'button') {
		return (
			<button
				disabled={disabled}
				draggable={draggable}
				{...props}
				className={className}
			/>
		)
	}

	else if (disabled === true) {
		return (
			<a
				draggable={draggable}
				{...props}
				href={undefined}
				className={className}
			/>
		)
	}

	else if (Base === 'a') {
		return (
			<a
				draggable={draggable}
				{...props}
				className={className}
			/>
		)
	}

	else {
		return (
			<Link
				draggable={draggable}
				{...props}
				href={props.href} // TS needs this here. Why?
				className={className}
			/>
		)
	}
}

export {Button}
export type {ButtonProps}
