import type {NextPage} from 'next'
import articles from '@assets/placeholder-articles.json'
import {DefaultHead} from '@components/DefaultHead'
import {Footer} from '@components/Footer'
import {Header} from '@components/Header'


const Article: NextPage<void> = ( ) => {
	const article = articles[0]
	const content = <article dangerouslySetInnerHTML={{__html: article.html}} />

	return (
		<>
			<DefaultHead />
			<Header />

			<main>
				{content}
			</main>

			<Footer />
		</>
	)
}

export {Article}
