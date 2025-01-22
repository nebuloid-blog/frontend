import {indexArticles} from '@utilities/requests/articles'
import {request} from 'graphql-request'
import type {IndexArticlesQuery} from '@nebuloid-types/generated/graphql'
import type {GetStaticProps} from 'next'

interface IndexArticlesResponse {
	articles?: IndexArticlesQuery['indexArticles'],
}

const getStaticProps: GetStaticProps<IndexArticlesResponse> = async (context) => {
	try {
		const response = await request(
			'https://api.nebuloid.dev',
			indexArticles,
			{ },
		)

		const articles = response.indexArticles
		return {
			props: {articles},
		}
	}

	// An error here means the API was not set up correctly
	//  at 'https://api.nebuloid.dev'.
	// Since there's no fallback data or testing data, a fully
	//  rendered page can only be seen with a working API.
	// TODO: Maybe handle the error in some specific way?
	catch (error) {
		// Describe the error in console.
		console.error(error)

		return {
			props: {articles: null},
		}
	}
}

export {getStaticProps}
