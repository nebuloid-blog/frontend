import React, {useEffect, useState} from 'react'
import {Footer} from './Footer'
import {Header} from './Header'
import {HeroTitle} from './HeroTitle'
import styles from './PageWrapper.module.scss'
import {SiteLogo} from '@components/SiteLogo'
import {ColorSchemeContext} from '@contexts/ColorScheme'
import {useSafeContext} from '@hooks/use-safe-context'
import {combineClassNames} from '@utilities/combine-class-names'

interface Props {
	children: React.ReactNode,
	hero?: boolean,
}

const PageWrapper: React.FC<Props> = ({
	hero = false,
	children,
}) => {
	// The color scheme context/global state is used here,
	//  although its value is determined elsewhere.
	const [colorScheme] = useSafeContext(ColorSchemeContext)
	const [showTitle, setShowTitle] = useState(true)
	const [showLogo, setShowLogo] = useState(false)

	useEffect(( ) => {
		const handleScroll = ( ) => {
			const {scrollY, innerHeight} = window
			const thresholdFlag = scrollY / innerHeight > 0.33
			setShowTitle(thresholdFlag)
			setShowLogo(thresholdFlag)
		}

		// Trigger this once immediately,
		//  to overwrite initial state.
		handleScroll( )

		window.addEventListener('scroll', handleScroll)
		return ( ) => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [ ])

	return (
		// If the wrapper has a hero-style, then the page intro
		//  will span the whole height of the browser's view.
		// It also adds a negative margin to the page element.
		<div
			id='page-wrapper'
			className={
				combineClassNames([
					styles.wrapper,
					hero && styles.hero,
					showTitle && styles['show-title'],
					showLogo && styles['show-logo'],
				])
			}
			data-color-scheme={colorScheme}
		>
			{/*
				PAGE INTRO / THE WRAPPER'S HEADER
				This header contains the site's logo link, and it
					may also contain the page's title and description.
			*/}
			<header className={styles.intro}>
				{hero && (
					<div className={styles['hero-title']}>
						<HeroTitle />
					</div>
				)}

				<div
					id='site-logo'
					className={styles['floating-logo']}
				>
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

				<section
					id='page-content'
					className={styles.content}
				>
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
