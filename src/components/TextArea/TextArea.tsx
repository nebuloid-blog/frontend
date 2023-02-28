import React, {forwardRef, useId} from 'react'
import styles from './TextArea.module.scss'
import type {TextNode} from '@nebuloid-types/text-node'
import {combineClassNames} from '@utilities/combine-class-names'

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
		<div className={
			combineClassNames([
				styles.root,
				className,
			])
		}>
			<label htmlFor={props.id}>
				{label}
			</label>

			<textarea
				{...props}
				ref={ref}
			/>
		</div>
	)
})

export {TextArea}
