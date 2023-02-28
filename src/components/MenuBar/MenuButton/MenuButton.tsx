import React from 'react'
import styles from './MenuButton.module.scss'
import {combineClassNames} from '@utilities/combine-class-names'
import type {ButtonProps} from '@components/Button'
import {Button} from '@components/Button'

type Props = ButtonProps & {highlight?: boolean}

const MenuButton: React.FC<Props> = ({
	highlight = false,
	...props
}) => (
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
