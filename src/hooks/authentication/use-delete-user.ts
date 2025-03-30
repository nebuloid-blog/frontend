import {AuthenticationContext} from '@contexts/Authentication'

import {
	replaceRefreshToken,
} from '@helpers/requests/refresh-tokens'

import {
	deleteUser as requestDeleteUser,
} from '@helpers/requests/users'

import {useSafeContext} from '@hooks/use-safe-context'
import {useCallback, useState} from 'react'

const useDeleteUser = ( ) => {
	const {
		// User Data
		me,
		setMe,
		loggedIn,

		// Access Token
		accessToken,
		clearAccessToken,

		// Refresh Token
		refreshToken,
		clearRefreshToken,
	} = useSafeContext(AuthenticationContext)

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	// This callback is the main feature of the hook.
	const deleteUser = useCallback(
		async ( ) => {
			setError(null)
			setLoading(true)

			try {
				// Route only available to logged-in users.
				if (
					loggedIn === false
					|| me == null
					|| accessToken == null
					|| refreshToken == null
				) throw new Error('User not logged in.')

				try {
					await requestDeleteUser({
						accessToken: accessToken,
						userId: me.id,
					})
				}

				catch {
					// Attempt to replace the auth tokens.
					const tokens = await replaceRefreshToken({refreshToken})

					// Try once again...
					await requestDeleteUser({
						accessToken: tokens.accessToken,
						userId: me.id,
					})
				}

				// On a success, clear tokens locally.
				// This will clear the user login session locally.
				// A failed deletion should not logout a user.
				setMe(null)
				clearAccessToken( )
				clearRefreshToken( )
				setLoading(false)
			}

			catch (error) {
				setError(error as Error)
				setLoading(false)
			}
		},
		[
			me,
			loggedIn,
			accessToken,
			refreshToken,
		],
	)

	return {
		deleteUser,
		loading,
		error,
	}
}

export {useDeleteUser}
