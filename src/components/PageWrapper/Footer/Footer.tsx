import Image from 'next/image'
import styles from './Footer.module.scss'
import type {FC} from 'react'

type Props = Record<never, never>

const Footer: FC<Props> = ( ) => (
	<footer className = {styles.root}>
		<a
			className = 'reset'
			href = 'https://github.com/nebuloid-blog'
			target = '_blank'
			rel = 'noopener noreferrer'
		>
			View source on
			<span className = {styles.logo}>
				<Image
					src = '/github.svg'
					alt = 'GitHub Logo'
					width = {72}
					height = {18}
				/>
			</span>
		</a>

		<a
			className = 'reset'
			href = 'https://vercel.com/home'
			target = '_blank'
			rel = 'noopener noreferrer'
		>
			Powered by
			<span className = {styles.logo}>
				<Image
					src = '/vercel.svg'
					alt = 'Vercel Logo'
					width = {72}
					height = {16}
				/>
			</span>
		</a>
	</footer>
)

export {Footer}
