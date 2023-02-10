import {request} from 'graphql-request'
import type {GetStaticProps} from 'next'
import type {GetArticleQuery} from '@nebuloid-types/generated/graphql'
import {getArticle} from '@utilities/requests/articles'

interface GetArticleResponse {
	article?: GetArticleQuery['getArticle'],
}

const getStaticProps: GetStaticProps<GetArticleResponse> = async (context) => {
	const slug = 'introduction'
	const directory = 'features'
	const file = `${slug}.html`

	const response = await request(
		'https://api.nebuloid.dev',
		getArticle,
		{file, directory},
	)

	const article = response.getArticle
	return {
		props: {article},
	}
}

export {getStaticProps}
