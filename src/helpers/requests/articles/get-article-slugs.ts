import {indexArticles} from '@helpers/graphql/articles'
import {backendUrl} from '@helpers/variables'
import {GraphQLClient} from 'graphql-request'

const getArticleSlugs = async ( ) => {
	try {
		// This client houses our API request method!
		const client = new GraphQLClient(backendUrl)

		const response = await client.request(
			indexArticles,
			{ },
		)

		const slugs = response.indexArticles?.map((article) => ({
			slug: article.data.slug,
		})) ?? [ ]

		return slugs
	}

	// An error here means the API was not set up correctly
	//  at 'https://api.nebuloid.dev' (or local dev).
	// Since there's no fallback data or testing data, a fully
	//  rendered page can only be seen with a working API.
	// TODO: Maybe handle the error in some specific way?
	catch (error) {
		// Describe the error in console.
		console.error(error)

		return [ ]
	}
}

export {getArticleSlugs}
