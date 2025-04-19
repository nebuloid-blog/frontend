import {AuthenticationContext} from '@contexts/Authentication'

import {
	replaceRefreshToken,
	revokeRefreshToken,
} from '@helpers/requests/refresh-tokens'

import {useSafeContext} from '@hooks/use-safe-context'
import {useCallback, useState} from 'react'

const useLogoutUser = ( ) => {
	const {
		// User Data
		me,
		setMe,
		loggedIn,

		// Access Token
		accessToken,
		clearAccessToken,
	} = useSafeContext(AuthenticationContext)

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	// This callback is the main feature of the hook.
	const logoutUser = useCallback(
		async ( ) => {
			setError(null)
			setLoading(true)

			try {
				// Route only available to logged-in users.
				if (
					loggedIn === false
						|| me == null
						|| accessToken == null
				) throw new Error('User not logged in.')

				try {
					await revokeRefreshToken({accessToken})
				}

				catch {
					// Attempt to replace the auth tokens.
					const {accessToken} = await replaceRefreshToken( )

					// Try once again...
					await revokeRefreshToken({accessToken})
				}
			}

			catch (error) {
				setError(error as Error)
			}

			finally {
				setLoading(false)

				// No matter what, clear tokens locally.
				// Even on a failure, tokens will expire eventually.
				// On a success, tokens are invalidated anyway.
				setMe(null)
				clearAccessToken( )
			}
		},
		[
			me,
			loggedIn,
			accessToken,
		],
	)

	return {
		logoutUser,
		loading,
		error,
	}
}

export {useLogoutUser}
