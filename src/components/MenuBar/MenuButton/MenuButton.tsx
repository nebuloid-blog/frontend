import type {UrlObject} from 'url'
import Link from 'next/link'
import React from 'react'
import styles from './MenuButton.module.scss'
import {combineClassNames} from '@utilities/combine-class-names'
import type {TextNode} from '@nebuloid-types/text-node'

type Url = UrlObject | string

type Props = {
	children: TextNode,
	highlight?: boolean,
} & (
	| {
		type?: 'link' | undefined,
		href: Url,
		onClick?: undefined,
	}
	| {
		type: 'button',
		href?: undefined,
		onClick: ( ) => void,
	}
)

const MenuButton: React.FC<Props> = ({
	children,
	highlight = false,
	href,
	onClick,
	type,
}) => {
	if (type === 'button') {
		return (
			<li className={styles.root}>
				<button
					onClick={onClick}
					className={
						combineClassNames([
							'reset',
							highlight && styles.highlight,
						])
					}
				>
					{children}
				</button>
			</li>
		)
	}

	else {
		return (
			<li className={styles.root}>
				<Link
					href={href}
					className={
						combineClassNames([
							'reset',
							highlight && styles.highlight,
						])
					}
				>
					{children}
				</Link>
			</li>
		)
	}
}

export {MenuButton}
