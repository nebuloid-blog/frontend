import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'
import {getArticleDetails} from '@helpers/requests/articles'
import type {NextPage} from 'next'

type Props = {params: Promise<{slug: string}>}

const Article: NextPage<Props> = async ({params}) => {
	const {slug} = await params
	const {article} = await getArticleDetails(slug)

	return (
		<>
			<DefaultHead />

			<PageWrapper>
				{article && (
					<main dangerouslySetInnerHTML = {{__html: article.html}} />
				)}
			</PageWrapper>
		</>
	)
}

export {Article}
