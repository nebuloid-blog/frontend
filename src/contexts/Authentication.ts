'use client'

import {createSafeContext} from '@hooks/use-safe-context'
import type {useAuthentication} from '@hooks/use-authentication'

type AuthenticationHook = ReturnType<typeof useAuthentication>
const AuthenticationContext = createSafeContext<AuthenticationHook>( )

const {
	Provider: AuthenticationProvider,
	Consumer: AuthenticationConsumer,
} = AuthenticationContext

export {
	AuthenticationContext,
	AuthenticationProvider,
	AuthenticationConsumer,
}
