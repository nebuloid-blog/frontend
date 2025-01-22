import {combineClassNames} from '@utilities/combine-class-names'
import Image from 'next/image'
import Link from 'next/link'
import styles from './article-card.module.scss'
import type {FC} from 'react'

interface Props {
	slug: string,
	title: string,
	description?: string,
}

const ArticleCard: FC<Props> = ({
	slug,
	title,
	description,
}) => (
	<Link
		href = {`/blog/${slug}`}
		className = {combineClassNames(
			'reset',
			styles.card,
		)}
	>
		<article>
			<section>
				<h3>{title}</h3>
				<p>{description}</p>
			</section>

			<aside className = {styles.thumbnail}>
				<Image
					src = 'https://via.placeholder.com/120.png'
					width = {120}
					height = {120}
					alt = 'article thumbnail'
				/>
			</aside>
		</article>
	</Link>
)

export {ArticleCard}
