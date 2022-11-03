import type {InferGetStaticPropsType, NextPage} from 'next'
import type {getStaticProps} from './get-static-data'

type ArticleProps = InferGetStaticPropsType<typeof getStaticProps>

const Article: NextPage<ArticleProps> = ({article}) => {
	if (article == null) return null

	return (
		<article dangerouslySetInnerHTML={{__html: article.html}}/>
	)
}

export {Article}
