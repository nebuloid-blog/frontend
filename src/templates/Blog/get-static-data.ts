import {request} from 'graphql-request'
import type {GetStaticProps} from 'next'
import type {IndexArticlesQuery} from '@nebuloid-types/generated/graphql'
import {indexArticles} from '@utilities/requests/articles'

interface IndexArticlesResponse {
	articles?: IndexArticlesQuery['indexArticles'],
}

const getStaticProps: GetStaticProps<IndexArticlesResponse> = async (context) => {
	const response = await request(
		'https://api.nebuloid.dev',
		indexArticles,
		{branch: 'drafts'},
	)

	const articles = response.indexArticles
	return {props: {articles}}
}

export {getStaticProps}
