import React from 'react'
import styles from './button.module.scss'

type ButtonSize =
	| 'small'
	| 'medium'
	| 'large'

type ButtonPriority =
	| 'primary'
	| 'secondary'
	| 'tertiary'

interface BaseProps {
	size?: ButtonSize,
	priority?: ButtonPriority,
}

type HTMLAnchorProps = JSX.IntrinsicElements['a']
type HTMLButtonProps = JSX.IntrinsicElements['button']

type Props = BaseProps & (
	| (HTMLAnchorProps & {as: 'a'})
	| (HTMLButtonProps & {as: 'button'})
)

const Button: React.FC<Props> = ({
	as: Component,
	size = 'medium',
	priority = 'primary',
	className,
	...props
}) => {
	// Stitch each className together into a single string...
	const classNames
	= `${className ?? ''} ${styles.button} ${styles[size]} ${styles[priority]}`

	return (
		<Component
			className={classNames}

			// WARNING!
			// There is a problem that I am encountering with
			//  Polymorphic Components and Discrimitory Unions,
			//  relating to extending Base HTML Attributes.
			// Point is, we shouldn't need to assert this type!
			//
			// TODO!
			// Resolve and delete the type assertion below.
			// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
			{...props as Record<string, unknown>}
		>
			{props.children}
		</Component>
	)
}

export {Button}
export type {
	ButtonSize,
	ButtonPriority,
}
