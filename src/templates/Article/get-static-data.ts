import {request} from 'graphql-request'
import type {GetStaticProps, GetStaticPaths} from 'next'
import type {GetArticleQuery} from '@nebuloid-types/generated/graphql'
import {indexArticles, getArticle} from '@utilities/requests/articles'

const getStaticPaths: GetStaticPaths = async ( ) => {
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

interface GetArticleResponse {
	article?: GetArticleQuery['getArticle'],
}

const getStaticProps: GetStaticProps<GetArticleResponse> = async (context) => {
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
	return {
		props: {article},
	}
}

export {
	getStaticPaths,
	getStaticProps,
}
