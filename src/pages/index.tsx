import type {NextPage} from 'next'
import Head from 'next/head'
import {Card} from '../components/Card'
import {Footer} from '../components/Footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = ( ) => (
	<div className={styles.container}>
		<Head>
			<title>Create Next App</title>
			<meta
				name='description'
				content='Generated by create next app'
			/>
			<link
				rel='icon'
				href='/favicon.ico'
			/>
		</Head>

		<main className={styles.main}>
			<h1 className={styles.title}>
				Welcome to{' '}
				<a href='https://nextjs.org'>Next.js!</a>
			</h1>

			<p className={styles.description}>
				Get started by editing{' '}
				<code className={styles.code}>pages/index.tsx</code>
			</p>

			<div className={styles.grid}>
				<Card
					href='https://nextjs.org/docs'
					title='Documentation &rarr;'
					description='Find in-depth information about Next.js features and API.'
				/>

				<Card
					href='https://nextjs.org/learn'
					title='Learn &rarr;'
					description='Learn about Next.js in an interactive course with quizzes!'
				/>

				<Card
					href='https://github.com/vercel/next.js/tree/canary/examples'
					title='Examples &rarr;'
					description='Discover and deploy boilerplate example Next.js projects.'
				/>

				<Card
					href='https://vercel.com/home'
					title='Deploy &rarr;'
					description='Instantly deploy your Next.js site to a public URL with Vercel.'
				/>
			</div>
		</main>

		<Footer />
	</div>
)

export default Home