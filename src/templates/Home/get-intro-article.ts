import {request} from 'graphql-request'
import {getArticle} from '@utilities/requests/articles'
import {processHTML} from '@utilities/process-html'

// We can't pass this data in from the component.
const SHIFT_HEADINGS = +1

const getIntroArticle = async ( ) => {
	// Route info
	const slug = 'introduction'
	const directory = 'features'
	const file = `${slug}.html`

	// Query function
	const response = await request(
		'https://api.nebuloid.dev',
		getArticle,
		{file, directory},
	)

	const article = response.getArticle
	let vFile

	if (article != null) {
		// Here, we are sanitizing the HTML string.
		// We'll also transform it with "SHIFT_HEADINGS".
		vFile = await processHTML(article.html, {shift: SHIFT_HEADINGS})
	}

	// Return query result & processed text
	return {...article, vFile}
}

export {getIntroArticle}
