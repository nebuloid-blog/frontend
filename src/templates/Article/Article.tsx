import type {NextPage, InferGetStaticPropsType} from 'next'
import type {getStaticProps} from './get-static-data'
import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Article: NextPage<Props> = ({article}) => {
	let content
	if (article == null) content = null
	else content = <article dangerouslySetInnerHTML={{__html: article.html}} />

	return (
		<>
			<DefaultHead />

			<PageWrapper>
				<main>
					{content}
				</main>
			</PageWrapper>
		</>
	)
}

export {Article}
