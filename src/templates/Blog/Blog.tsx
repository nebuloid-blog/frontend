import type {InferGetStaticPropsType, NextPage} from 'next'
import Link from 'next/link'
import type {getStaticProps} from './get-static-data'

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>

const Blog: NextPage<BlogProps> = ({articles}) => {
	if (articles == null) return null

	return (
		<ul>
			{articles.map((article) => (
				<li key={article.slug}>
					<Link href={`./blog/${article.slug}`}>
						<a>
							<p>
								{article.title}
							</p>
						</a>
					</Link>
				</li>
			))}
		</ul>
	)
}

export {Blog}
