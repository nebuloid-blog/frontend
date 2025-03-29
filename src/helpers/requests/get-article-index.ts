import {indexArticles} from '@helpers/graphql/articles'
import {request} from 'graphql-request'

const getArticleIndex = async ( ) => {
	try {
		// Query function
		const response = await request(
			'https://api.nebuloid.dev',
			indexArticles,
			{ },
		)

		const articles = response.indexArticles
		return {articles}
	}

	// An error here means the API was not set up correctly
	//  at 'https://api.nebuloid.dev'.
	// Since there's no fallback data or testing data, a fully
	//  rendered page can only be seen with a working API.
	// TODO: Maybe handle the error in some specific way?
	catch (error) {
		// Describe the error in console.
		console.error(error)

		return {articles: null}
	}
}

export {getArticleIndex}
