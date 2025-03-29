import {graphql} from '@nebuloid-types/generated'

const getArticle = graphql(/* GraphQL */ `
	query GetArticle(
		$file: String!,
		$directory: String,
		$branch: String,
	) {
		getArticle(
			file: $file,
			directory: $directory,
			branch: $branch,
		) {
			html
			data {
				slug
				title
			}
		}
	}
`)

const indexArticles = graphql(/* GraphQL */ `
	query IndexArticles($branch: String) {
		indexArticles(branch: $branch) {
			html
			data {
				slug
				title
			}
		}
	}
`)

export {
	getArticle,
	indexArticles,
}
