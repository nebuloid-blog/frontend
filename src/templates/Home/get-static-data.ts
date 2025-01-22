import {processHTML} from '@utilities/process-html'
import {getArticle} from '@utilities/requests/articles'
import {request} from 'graphql-request'
import type {GetArticleQuery} from '@nebuloid-types/generated/graphql'
import type {GetStaticProps} from 'next'

// We can't pass this data in from the component,
//  else it would cease to be a static function.
const SHIFT_HEADINGS = +1

interface GetArticleResponse {
	article?: GetArticleQuery['getArticle'],
}

const getStaticProps: GetStaticProps<GetArticleResponse> = async (context) => {
	try {
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

		if (article != null) {
			// Here, we are sanitizing the HTML string.
			// We'll also transform it with "SHIFT_HEADINGS".
			const vFile = await processHTML(article.html, {shift: SHIFT_HEADINGS})
			article.html = vFile.toString( )
		}

		return {
			props: {article},
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
			props: {article: null},
		}
	}
}

export {getStaticProps}
