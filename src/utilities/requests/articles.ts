import {graphql} from '@nebuloid-types/generated'

const getArticle = graphql(/* GraphQL */ `
	query GetArticle($branch: String, $file: String!) {
		getArticle(branch: $branch, file: $file) {
			title
			slug
			html
		}
	}
`)

const indexArticles = graphql(/* GraphQL */ `
	query IndexArticles($branch: String) {
		indexArticles(branch: $branch) {
			title
			slug
			html
		}
	}
`)

export {
	getArticle,
	indexArticles,
}
