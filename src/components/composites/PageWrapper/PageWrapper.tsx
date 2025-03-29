'use client'

import {SiteLogo} from '@components/SiteLogo'
import {ColorSchemeContext} from '@contexts/ColorScheme'
import {combineClassNames} from '@helpers/combine-class-names'
import {useSafeContext} from '@hooks/use-safe-context'
import Image from 'next/image'
import {Footer} from './Footer'
import {Header} from './Header'
import {HeroTitle} from './HeroTitle'
import styles from './PageWrapper.module.scss'
import {useTitleVisibility} from './use-title-visibility'
import type {FC, ReactNode} from 'react'

interface Props {
	children: ReactNode,
	hero?: boolean,
}

const PageWrapper: FC<Props> = ({
	hero = false,
	children,
}) => {
	// The color scheme context/global state is used here,
	//  although its value is determined elsewhere.
	const [colorScheme] = useSafeContext(ColorSchemeContext)
	const {showTitle} = useTitleVisibility( )

	return (
		// If the wrapper has a hero-style, then the page intro
		//  will span the whole height of the browser's view.
		// It also adds a negative margin to the page element.
		<div
			id = 'page-wrapper'
			className = {
				combineClassNames([
					styles.wrapper,
					hero && styles.hero,
					showTitle && styles['show-title'],
					!showTitle && styles['show-logo'],
				])
			}
			data-color-scheme = {colorScheme}
		>
			{/*
				PAGE INTRO / THE WRAPPER'S HEADER
				This header contains the site's logo link, and it
					may also contain the page's title and description.
			*/}
			<header className = {styles.intro}>
				{hero && (
					<div className = {styles['hero-title']}>
						<HeroTitle />
					</div>
				)}

				<div
					id = 'site-logo'
					className = {styles['floating-logo']}
				>
					<SiteLogo />
				</div>
			</header>


			{/*
				PAGE CONTENT
				This div represents a page in the site.
				The page's content has its own section as well.
			*/}
			<div className = {styles.page}>
				<Header />

				<section
					id = 'page-content'
					className = {styles.content}
				>
					{children}
				</section>

				<Footer />
			</div>

			{/*
				PAGE APPENDIX / THE WRAPPER'S FOOTER
				This footer contains light copyright info.
			*/}
			<footer className = {styles.appendix}>
				<a
					className = {styles.attribution}
					href = 'https://creativecommons.org/licenses/by-nc-sa/4.0/ '
				>
					<Image
						src = '/creative-commons-by-nc-sa.svg'
						alt = 'Creative Commons License'
						width = {171}
						height = {60}
					/>
				</a>
			</footer>
		</div>
	)
}

export {PageWrapper}
