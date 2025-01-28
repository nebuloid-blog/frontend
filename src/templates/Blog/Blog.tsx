import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'
import {ArticleCard} from './ArticleCard'
import styles from './blog.module.scss'
import {getArticleIndex} from './get-article-index'
import type {NextPage} from 'next'

const Blog: NextPage = async ( ) => {
	const {articles} = await getArticleIndex( )

	return (
		<>
			<DefaultHead />

			<PageWrapper>
				<main className = {styles.blog}>
					<section className = {styles.index}>
						<h1>Nebuloid Blog</h1>
						<h2>Articles</h2>
						{/* Article Search? */}
						{/* ... */}
						{articles != null && (
							<ul>
								{/* Article Previews */}
								{articles.map((article) => (
									<li key = {article.data.slug}>
										<ArticleCard
											slug = {article.data.slug}
											title = {article.data.title}
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
}

export {Blog}
