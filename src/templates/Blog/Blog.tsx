import type {NextPage} from 'next'
import {ArticleCard} from './ArticleCard'
import styles from './blog.module.scss'
import {DefaultHead} from '@components/DefaultHead'
import {Footer} from '@components/Footer'
import {Header} from '@components/Header'

interface Props {
	articles: Array<{
		slug: string,
		title: string,
	}>,
}

const Blog: NextPage<Props> = ({articles}) => (
	<>
		<DefaultHead />
		<Header />

		<main className={styles.blog}>
			<section className={styles.index}>
				<h1>Nebuloid Blog</h1>
				{/* Article Search? */}
				{/* ... */}

				<ul>
					{/* Article Previews */}
					{articles.map((article) => (
						<li key={article.slug}>
							<ArticleCard {...article} />
						</li>
					))}
				</ul>

				{/* Pagination */}
				{/* [1,2,3, ..., last] */}
			</section>
		</main>

		<Footer />
	</>
)

export {Blog}
