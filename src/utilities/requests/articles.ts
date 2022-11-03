const getArticle = /* GraphQL */ `
	query GetArticle($branch: String, $file: String!) {
		getArticle(branch: $branch, file: $file) {
			title
			slug
			html
		}
	}
`

const indexArticles = /* GraphQL */ `
	query IndexArticles($branch: String) {
		indexArticles(branch: $branch) {
			title
			slug
			html
		}
	}
`

export {
	getArticle,
	indexArticles,
}
