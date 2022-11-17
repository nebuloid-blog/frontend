import type {NextPage} from 'next'
import Head from 'next/head'
import styles from './home.module.scss'
import {Footer} from '@components/Footer'

const Home: NextPage = ( ) => (
	<>
		<Head>
			<title>Nebuloid</title>
			<meta
				name='description'
				content='Nebuloid: a personal dev blog &amp; portfolio'
			/>
			<link
				rel='icon'
				href='/vercel.ico'
			/>
		</Head>

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
