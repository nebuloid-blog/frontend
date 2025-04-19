import {AuthenticationContext} from '@contexts/Authentication'

import {
	loginUser as requestLoginUser,
} from '@helpers/requests/users'

import {useSafeContext} from '@hooks/use-safe-context'
import {useCallback, useState} from 'react'

import type {
	LoginUserParams,
} from '@helpers/requests/users'

const useLoginUser = ( ) => {
	const {
		setMe,
		loggedIn,
		setAccessToken,
	} = useSafeContext(AuthenticationContext)

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const loginUser = useCallback(
		async (params: LoginUserParams) => {
			setError(null)
			setLoading(true)

			try {
				// eslint-disable-next-line curly
				if (loggedIn === true) {
					throw new Error('Can\'t be logged in.')
				}

				// Attempt to log the user in and update context data.
				const {user, accessToken} = await requestLoginUser(params)

				setMe(user)
				setAccessToken(accessToken)
				setLoading(false)
			}

			catch (error) {
				setError(error as Error)
				setLoading(false)
			}
		},
		[loggedIn],
	)

	return {
		loginUser,
		loading,
		error,
	}
}

export {useLoginUser}
