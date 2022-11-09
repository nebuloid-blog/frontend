import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import styles from './app.module.scss'

const App: NextPage<AppProps> = ({Component, pageProps}) => (
	<div className={styles['app-container']}>
		<Component {...pageProps} />
	</div>
)

export {App}
