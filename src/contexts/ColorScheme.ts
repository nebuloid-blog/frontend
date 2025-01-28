import {createSafeContext} from '@hooks/use-safe-context'
import type {useColorScheme} from '@hooks/use-color-scheme'

type ColorSchemeHook = ReturnType<typeof useColorScheme>
const ColorSchemeContext = createSafeContext<ColorSchemeHook>( )

const {
	Provider: ColorSchemeProvider,
	Consumer: ColorSchemeConsumer,
} = ColorSchemeContext

export {
	ColorSchemeContext,
	ColorSchemeProvider,
	ColorSchemeConsumer,
}
