import Image from 'next/image'
import React from 'react'
import styles from './article-card.module.scss'

interface Props {
	slug: string,
	title: string,
	description?: string,
}

const ArticleCard: React.FC<Props> = ({
	title,
	description,
}) => (
	<article className={styles.card}>
		<section>
			<h3>{title}</h3>
			<p>{description}</p>
		</section>

		<aside className={styles.thumbnail}>
			<Image
				src='https://via.placeholder.com/120.png'
				width={120}
				height={120}
				alt='article thumbnail'
			/>
		</aside>
	</article>
)

export {ArticleCard}
