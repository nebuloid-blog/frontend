import {Button} from '@components/Button'
import {combineClassNames} from '@utilities/combine-class-names'
import styles from './MenuButton.module.scss'
import type {BaseElement, ButtonProps} from '@components/Button'

type Props<El extends BaseElement>
= ButtonProps<El> & {highlight?: boolean}

// TODO: Investigate types similarly to the button element.
const MenuButton = <El extends BaseElement> (props: Props<El>) => (
	<li className = {styles.root}>
		<Button
			color = 'link'
			{...props}
			className = {
				combineClassNames([
					'reset',
					props.highlight && styles.highlight,
					props.className,
				])
			}
		/>
	</li>
)

export {MenuButton}
