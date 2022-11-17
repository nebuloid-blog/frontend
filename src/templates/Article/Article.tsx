import type {NextPage} from 'next'
import {DefaultHead} from '@components/DefaultHead'
import {Footer} from '@components/Footer'
import {Header} from '@components/Header'

interface Props {
	article: {
		html?: string,
	},
}

const Article: NextPage<Props> = ({article}) => {
	let content
	if (article.html == null) content = null
	else content = <article dangerouslySetInnerHTML={{__html: article.html}} />

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
