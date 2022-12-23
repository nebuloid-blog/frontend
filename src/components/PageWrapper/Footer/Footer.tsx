import Image from 'next/image'
import React from 'react'
import styles from './footer.module.scss'

const Footer: React.FC = ( ) => (
	<footer className={styles.footer}>
		<a
			className='reset'
			href='https://vercel.com/home'
			target='_blank'
			rel='noopener noreferrer'
		>
			Powered by
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
