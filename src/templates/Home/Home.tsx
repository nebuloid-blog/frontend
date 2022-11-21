import type {NextPage} from 'next'
import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'

const Home: NextPage = ( ) => (
	<>
		<DefaultHead />

		<PageWrapper
			heading='Welcome to Nebuloid.'
			subheading='Created by @noltron000 with care.'
		>
			<main>
				<div>
					<h2>Welcome to Nebuloid!</h2>
					<p>Get started by checking out the site's blog.</p>
				</div>
			</main>
		</PageWrapper>
	</>
)

export {Home}
