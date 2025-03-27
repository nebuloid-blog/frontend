import {processHTML} from '@helpers/process-html'
import {getArticle} from '@helpers/requests/articles'
import {request} from 'graphql-request'

// We can't pass this data in from the component,
//  else it would cease to be a static function.
const SHIFT_HEADINGS = +1

const getArticleDetails = async (slug: string | null) => {
	try {
		if (slug == null) {
			// Possibly reword this one a bit.
			throw new Error('404: Not Found')
		}

		const file = `${slug}.html`

		const response = await request(
			'https://api.nebuloid.dev',
			getArticle,
			{file},
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
	//  at 'https://api.nebuloid.dev'.
	// Since there's no fallback data or testing data, a fully
	//  rendered page can only be seen with a working API.
	// TODO: Maybe handle the error in some specific way?
	catch (error) {
		// Describe the error in console.
		console.error(error)

		return {article: null}
	}
}

export {getArticleDetails}
