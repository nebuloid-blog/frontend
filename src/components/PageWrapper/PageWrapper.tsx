import React from 'react'
import {Footer} from './Footer'
import {Header} from './Header'
import {SiteLogo} from './SiteLogo'
import styles from './page-wrapper.module.scss'
import {Heading} from '@components/Heading'
import type {TextNode} from '@nebuloid-types/text-node'

type Props = {
	children: React.ReactNode,
} & ({
	heading: TextNode,
	subheading?: TextNode,
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

	// If the wrapper has a hero-style, then the page intro
	//  will span the whole height of the browser's view.
	// It also adds a negative margin to the page element.
	let wrapperStyle = styles.wrapper
	if (hero) wrapperStyle = `${styles.wrapper} ${styles.hero}`

	return (
		<div className={wrapperStyle}>
			{/*
				PAGE INTRO / THE WRAPPER'S HEADER
				This header contains the site's logo link, and it
				 may also contain the page's title and description.
			*/}
			<header className={styles.intro}>
				{hero && (
					<Heading subheading={subheading}>
						{heading}
					</Heading>
				)}

				<div className={styles['floating-logo']}>
					<SiteLogo />
				</div>
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
