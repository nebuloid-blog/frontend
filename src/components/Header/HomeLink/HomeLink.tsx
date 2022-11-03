import Image from 'next/image'
import Link from 'next/link'
import styles from './home-link.module.scss'

const HomeLink = ( ) => (
	<Link href='/'>
		<a className={styles.home}>
			<span className={styles.logo}>
				<Image
					src='/vercel.ico'
					alt='vercel&apos;s logo'
					width={256}
					height={256}
				/>
			</span>
			<h1>NextJS Website</h1>
		</a>
	</Link>
)

export {HomeLink}
