import {Addresses} from './Addresses'
import {ContactForm} from './ContactForm'
import styles from './Home.module.scss'
import {getIntroArticle} from './get-intro-article'

const Home = async ( ) => {
	const article = await getIntroArticle( )

	return (
		<>
			<main>
				{article.vFile?.result}
			</main>

			<section className={styles.contact}>
				<h2>Get in Touch</h2>
				<div className={styles.content}>
					<ContactForm />
					<Addresses />
				</div>
			</section>
		</>
	)
}

export {Home}
