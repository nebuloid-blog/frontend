import {combineClassNames} from '@helpers/combine-class-names'
import React, {forwardRef, useId, JSX} from 'react'
import styles from './TextInput.module.scss'
import type {TextNode} from '@app/types/text-node'

type HTMLInputProps = JSX.IntrinsicElements['input']

interface Props extends HTMLInputProps {
	label: TextNode,
	type?: 'text' | 'email',
}

const TextInput = forwardRef<HTMLInputElement, Props>((
	{
		label,
		className,
		...props
	},
	ref,
) => {
	const backupId = useId( )
	props.id ??= backupId

	return (
		<div
			className = {
				combineClassNames([
					styles.root,
					className,
				])
			}
		>
			<label htmlFor = {props.id}>
				{label}
			</label>

			<input
				{...props}
				type = {props.type}
				ref = {ref}
			/>
		</div>
	)
})

export {TextInput}
