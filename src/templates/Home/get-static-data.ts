import {request} from 'graphql-request'
import type {GetStaticProps} from 'next'
import type {GetArticleQuery} from '@nebuloid-types/generated/graphql'
import {getArticle} from '@utilities/requests/articles'
import {processHTML} from '@utilities/process-html'

// We can't pass this data in from the component.
const SHIFT_HEADINGS = +1

interface GetArticleResponse {
	article?: GetArticleQuery['getArticle'],
}

const getStaticProps: GetStaticProps<GetArticleResponse> = async (context) => {
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

export {getStaticProps}
