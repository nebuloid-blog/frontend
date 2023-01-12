import {useCallback, useMemo} from 'react'
import {useLocalStorage} from './use-local-storage'

type ColorScheme = 'light' | 'dark' | 'system'

const useColorScheme = ( ) => {
	// This mostly is just a wrapper for useLocalStorage.
	const [
		colorSchemeValue,
		setColorSchemeValue,
		deleteColorScheme,
	] = useLocalStorage('colorScheme')

	// Refine values to just dark/light/system.
	const colorScheme = useMemo(( ): ColorScheme => {
		if (
			colorSchemeValue === 'dark'
			|| colorSchemeValue === 'light'
			|| colorSchemeValue === 'system'
		) return colorSchemeValue
		else return 'system'
	}, [colorSchemeValue])

	// Only accept dark/light/system as values.
	const setColorScheme = useCallback((newValue: ColorScheme) => {
		setColorSchemeValue(newValue)
	}, [setColorSchemeValue])

	return [
		colorScheme,
		setColorScheme,
		deleteColorScheme,
	] as const
}

export {useColorScheme}
export type {ColorScheme}
