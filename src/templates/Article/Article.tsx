import type {NextPage, InferGetStaticPropsType} from 'next'
import type {getStaticProps} from './get-static-data'
import {DefaultHead} from '@components/DefaultHead'
import {Footer} from '@components/Footer'
import {Header} from '@components/Header'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Article: NextPage<Props> = ({article}) => {
	let content
	if (article == null) content = null
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
