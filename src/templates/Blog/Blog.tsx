import type {InferGetStaticPropsType, NextPage} from 'next'
import {ArticleCard} from './ArticleCard'
import styles from './blog.module.scss'
import type {getStaticProps} from './get-static-data'
import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Blog: NextPage<Props> = ({articles}) => (
	<>
		<DefaultHead />

		<PageWrapper>
			<main className={styles.blog}>
				<section className={styles.index}>
					<h1>Nebuloid Blog</h1>
					<h2>Articles</h2>
					{/* Article Search? */}
					{/* ... */}
					{articles != null && (
						<ul>
							{/* Article Previews */}
							{articles.map((article) => (
								<li key={article.data.slug}>
									<ArticleCard
										slug={article.data.slug}
										title={article.data.title}
									/>
								</li>
							))}
						</ul>
					)}

					{/* Pagination */}
					{/* [1,2,3, ..., last] */}
				</section>
			</main>
		</PageWrapper>
	</>
)

export {Blog}
