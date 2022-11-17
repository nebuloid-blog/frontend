import type {
	GetStaticProps, GetStaticPaths,
} from 'next'
import articles from '@assets/placeholder-articles.json'

// WARNING: TODO:
// These functions are temporary mock data getters.
// Replace with real API data once able.
const getStaticPaths: GetStaticPaths = ( ) => {
	const paths = articles.map((article) => ({
		params: {
			slug: article.slug,
		},
	}))

	return {
		paths: paths,
		fallback: false,
	}
}

const getStaticProps: GetStaticProps = (context) => {
	const slug = context.params?.slug
	if (slug == null || typeof slug !== 'string') {
		return {
			props: { },
		}
	}

	const article = articles.find((article) => (article.slug === slug))
	return {
		props: {
			article,
		},
	}
}

export {
	getStaticPaths,
	getStaticProps,
}
