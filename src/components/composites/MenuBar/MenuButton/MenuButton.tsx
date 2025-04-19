import {Button} from '@components/Button'

import {
	combineClassNames,
} from '@helpers/combine-class-names'

import styles from './MenuButton.module.scss'

import type {
	BaseElement,
	ButtonProps,
} from '@components/Button'

type Props<El extends BaseElement>
= ButtonProps<El> & {highlight?: boolean}

const MenuButton = <El extends BaseElement> ({
	highlight = false,
	...props
}: Props<El>) => (
	<li className = {styles.root}>
		{/* @ts-expect-error: `highlight` shan't be a prop! */}
		<Button
			color = 'link'
			{...props}
			className = {
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
