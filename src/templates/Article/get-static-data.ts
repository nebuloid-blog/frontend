import {processHTML} from '@utilities/process-html'
import {indexArticles, getArticle} from '@utilities/requests/articles'
import {request} from 'graphql-request'
import type {GetArticleQuery} from '@nebuloid-types/generated/graphql'
import type {GetStaticProps, GetStaticPaths} from 'next'

// We can't pass this data in from the component,
//  else it would cease to be a static function.
const SHIFT_HEADINGS = +1

const getStaticPaths: GetStaticPaths = async ( ) => {
	try {
		const response = await request(
			'https://api.nebuloid.dev',
			indexArticles,
			{ },
		)

		const paths = response.indexArticles?.map((article) => ({
			params: {
				slug: article.data.slug,
			},
		})) ?? [ ]

		return {
			paths: paths,
			fallback: false,
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
			paths: [ ],
			fallback: true,
		}
	}
}

interface GetArticleResponse {
	article?: GetArticleQuery['getArticle'],
}

const getStaticProps: GetStaticProps<GetArticleResponse> = async (context) => {
	try {
		const slug = context.params?.slug
		if (slug == null || typeof slug !== 'string') {
			return {
				props: { },
			}
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

export {
	getStaticPaths,
	getStaticProps,
}
