import type {NextPage} from 'next'
import Head from 'next/head'

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

		<main>
			<h1>Welcome to Nebuloid!</h1>
			<p>Get started by checking out the site's blog.</p>
		</main>
	</>
)

export {Home}
