import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {AppWrapper} from './AppWrapper'
import styles from './app.module.scss'

const App: NextPage<AppProps> = ({Component, pageProps}) => (
	<AppWrapper>
		<div className={styles['app-container']}>
			<Component {...pageProps} />
		</div>
	</AppWrapper>
)

export {App}
