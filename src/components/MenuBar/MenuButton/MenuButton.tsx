import React from 'react'
import styles from './MenuButton.module.scss'
import {combineClassNames} from '@utilities/combine-class-names'
import type {BaseElementType, ButtonProps} from '@components/Button'
import {Button} from '@components/Button'

type Props<El extends BaseElementType>
= ButtonProps<El> & {highlight?: boolean}

const MenuButton = <El extends BaseElementType> ({
	highlight = false,
	...props
}: Props<El>) => (
	/* eslint-disable indent */
	<li className={styles.root}>
		<Button
			color='link'
			{...props}
			className={
				combineClassNames([
					'reset',
					highlight && styles.highlight,
					props.className,
				])
			}
		/>
	</li>
)

export {MenuButton}
