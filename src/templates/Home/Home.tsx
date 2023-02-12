import type {InferGetStaticPropsType, NextPage} from 'next'
import type {getStaticProps} from './get-static-data'
import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'
import {RehypeHTML} from '@components/RehypeHTML'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({article}) => (<>
	<DefaultHead />

	<PageWrapper hero>
		<main>
			{article && <RehypeHTML html={article.html} />}
		</main>
	</PageWrapper>
</>)

export {Home}
