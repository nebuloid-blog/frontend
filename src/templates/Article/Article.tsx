import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'
import type {getStaticProps} from './get-static-data'
import type {NextPage, InferGetStaticPropsType} from 'next'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Article: NextPage<Props> = ({article}) => (
	<>
		<DefaultHead />

		<PageWrapper>
			{article && (
				<main dangerouslySetInnerHTML = {{__html: article.html}} />
			)}
		</PageWrapper>
	</>
)

export {Article}
