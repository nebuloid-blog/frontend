import type {NextPage, InferGetStaticPropsType} from 'next'
import type {getStaticProps} from './get-static-data'
import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'
import {RehypeHTML} from '@components/RehypeHTML'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Article: NextPage<Props> = ({article}) => (
	<>
		<DefaultHead />

		<PageWrapper>
			<main>
				{article && <RehypeHTML html={article.html} />}
			</main>
		</PageWrapper>
	</>
)

export {Article}
