import Image from 'next/image'
import styles from '@styles/Home.module.css'

const Footer = ( ) => (
	<footer className={styles.footer}>
		<a
			href='https://vercel.com/home'
			target='_blank'
			rel='noopener noreferrer'
		>
			Powered by{' '}
			<span className={styles.logo}>
				<Image
					src='/vercel.svg'
					alt='Vercel Logo'
					width={72}
					height={16}
				/>
			</span>
		</a>
	</footer>
)

export {Footer}
