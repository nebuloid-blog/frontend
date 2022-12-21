import React from 'react'
import styles from './page-wrapper.module.scss'
import {Footer} from '@components/Footer'
import {Header} from '@components/Header'

type Props = {
	children: React.ReactNode,
} & ({
	heading: React.ReactNode,
	subheading?: React.ReactNode,
} | {
	heading?: undefined,
	subheading?: undefined,
})

const PageWrapper: React.FC<Props> = ({
	heading,
	subheading,
	children,
}) => {
	const hero = heading != null
	let introStyle = styles.intro
	if (hero) introStyle = `${styles.intro} ${styles.hero}`

	return (
		<div className={styles.wrapper}>
			{/*
				PAGE INTRO / THE WRAPPER'S HEADER
				This header contains the site's logo link, and it
				 may also contain the page's title and description.
				If it has a title, then it spans the whole page.
				This makes a sort of hero-image effect with the BG.
			*/}
			<header className={introStyle}>
				{hero && (
					<hgroup>
						<h1>{heading}</h1>
						<p>{subheading}</p>
					</hgroup>
				)}
			</header>


			{/*
				PAGE CONTENT
				This div represents a page in the site.
				The page's content has its own section as well.
			*/}
			<div className={styles.page}>
				<Header />

				<section id='page-content' className={styles.content}>
					{children}
				</section>

				<Footer />
			</div>

			{/*
				PAGE APPENDIX / THE WRAPPER'S FOOTER
				This footer contains light copyright info.
			*/}
			<footer className={styles.appendix}>
				CopyLeft 2022; Nolan Kovacik
			</footer>
		</div>
	)
}

export {PageWrapper}
