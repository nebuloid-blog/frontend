import type {GetStaticProps} from 'next'
import articles from '@assets/placeholder-articles.json'

// WARNING: TODO:
// These functions are temporary mock data getters.
// Replace with real API data once able.
const getStaticProps: GetStaticProps = ( ) => ({
	props: {articles},
})

export {getStaticProps}
