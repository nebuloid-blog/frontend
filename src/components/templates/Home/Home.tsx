import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'
import {Addresses} from './Addresses'
import {ContactForm} from './ContactForm'
import styles from './Home.module.scss'
import {getIntroArticle} from './get-intro-article'
import type {NextPage} from 'next'

// Home Template
const Home: NextPage = async ( ) => {
	const {article} = await getIntroArticle( )

	return (
		<>
			<DefaultHead />

			<PageWrapper hero>
				{article && (
					<main dangerouslySetInnerHTML = {{__html: article.html}} />
				)}

				<section className = {styles.contact}>
					<h2>Get in Touch</h2>
					<div className = {styles.content}>
						<ContactForm />
						<Addresses />
					</div>
				</section>
			</PageWrapper>
		</>
	)
}

export {Home}
