import React, {useCallback, useMemo} from 'react'
import styles from './Header.module.scss'
import {ColorSchemeContext} from '@contexts/ColorScheme'
import type {ColorScheme} from '@hooks/use-color-scheme'
import {useSafeContext} from '@hooks/use-safe-context'
import {MenuBar, MenuButton} from '@components/MenuBar'

type Props = Record<never, never>

const Header: React.FC<Props> = ( ) => {
	// Here, we can toggle the color scheme's global state.
	// Without its usage outside of this component, it has
	//  zero implications for CSS stylings.
	const [colorScheme, setColorScheme] = useSafeContext(ColorSchemeContext)

	const nextColorScheme = useMemo(( ): ColorScheme => {
		if (colorScheme === 'dark') return 'light'
		else if (colorScheme === 'light') return 'system'
		else return 'dark'
	}, [colorScheme])

	const getReadableColor = useCallback((color: ColorScheme) => {
		if (color === 'dark') return 'dark mode'
		else if (color === 'light') return 'light mode'
		else return 'system theme'
	}, [ ])

	return (
		<header className={styles.root}>
			{/* Navigation Items */}
			<MenuBar navigation>
				<MenuButton
					href='/'
					highlight
				>
					Home
				</MenuButton>

				<MenuButton
					href='/'
				>
					Blog
				</MenuButton>
			</MenuBar>

			{/* Spacer Bar */}
			<hr />

			{/* Site Settings */}
			<MenuBar>
				<MenuButton
					type='button'
					onClick={( ) => {
						setColorScheme(nextColorScheme)
					}}
				>
					Use {getReadableColor(nextColorScheme)}
				</MenuButton>
			</MenuBar>

			{/* Authentication Options */}
			{/*
				Sign In / Register
				Sign Out / View Profile
				...
			*/}
		</header>
	)
}

export {Header}
