import type {NextPage} from 'next'
import styles from './home.module.scss'
import {DefaultHead} from '@components/DefaultHead'
import {Footer} from '@components/Footer'
import {Header} from '@components/Header'

const Home: NextPage = ( ) => (
	<>
		<DefaultHead />
		<Header />

		<main className={styles.home}>
			<div className={styles.hero}>
				<h1>Welcome to Nebuloid!</h1>
				<p>Get started by checking out the site's blog.</p>
			</div>
		</main>

		<Footer />
	</>
)

export {Home}
