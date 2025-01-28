import {indexArticles} from '@utilities/requests/articles'
import {request} from 'graphql-request'

const getArticleSlugs = async ( ) => {
	try {
		const response = await request(
			'https://api.nebuloid.dev',
			indexArticles,
			{ },
		)

		const slugs = response.indexArticles?.map((article) => ({
			slug: article.data.slug,
		})) ?? [ ]

		return slugs
	}

	// An error here means the API was not set up correctly
	//  at 'https://api.nebuloid.dev'.
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
