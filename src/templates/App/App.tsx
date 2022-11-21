import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {AppWrapper} from './AppWrapper'

const App: NextPage<AppProps> = ({Component, pageProps}) => (
	<AppWrapper>
		<Component {...pageProps} />
	</AppWrapper>
)

export {App}
