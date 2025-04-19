import {combineClassNames} from '@helpers/combine-class-names'
import React, {forwardRef, useId, JSX} from 'react'
import styles from './TextArea.module.scss'
import type {TextNode} from '@app/types/text-node'

type HTMLTextAreaProps = JSX.IntrinsicElements['textarea']

interface Props extends HTMLTextAreaProps {
	label: TextNode,
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>((
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

			<textarea
				{...props}
				ref = {ref}
			/>
		</div>
	)
})

export {TextArea}
