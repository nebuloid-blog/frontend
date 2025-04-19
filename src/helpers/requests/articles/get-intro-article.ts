import {getArticle} from '@helpers/graphql/articles'
import {processHTML} from '@helpers/process-html'
import {backendUrl} from '@helpers/variables'
import {GraphQLClient} from 'graphql-request'

// We can't pass this data in from the component,
//  else it would cease to be a static function.
const SHIFT_HEADINGS = +1

const getIntroArticle = async ( ) => {
	try {
		// Route info
		const slug = 'introduction'
		const directory = 'features'
		const file = `${slug}.html`

		// This client houses our API request method!
		const client = new GraphQLClient(backendUrl)

		const response = await client.request(
			getArticle,
			{file, directory},
		)

		const article = response.getArticle

		let vFile
		if (article != null) {
			// Here, we are sanitizing the HTML string, even
			//  though it already gets sanitized on the backend.
			// We'll also transform it with "SHIFT_HEADINGS".
			vFile = await processHTML(article.html, {shift: SHIFT_HEADINGS})
			article.html = vFile.toString( )
		}

		// Return query result & processed text
		return {article}
	}

	// An error here means the API was not set up correctly
	//  at 'https://api.nebuloid.dev' (or local dev).
	// Since there's no fallback data or testing data, a fully
	//  rendered page can only be seen with a working API.
	// TODO: Maybe handle the error in some specific way?
	catch (error) {
		// Describe the error in console.
		console.error(error)

		return {article: null}
	}
}

export {getIntroArticle}
