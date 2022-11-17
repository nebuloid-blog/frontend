import type {NextPage} from 'next'
import styles from './blog.module.scss'
import articles from '@assets/placeholder-articles.json'
import {DefaultHead} from '@components/DefaultHead'
import {Footer} from '@components/Footer'
import {Header} from '@components/Header'


const Blog: NextPage<void> = ( ) => (
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
							<h3>{article.title}</h3>
							{/* With thumbnail, description, etc. */}
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
