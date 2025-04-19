import {AuthenticationContext} from '@contexts/Authentication'

import {
	createUser as requestCreateUser,
} from '@helpers/requests/users'

import {useSafeContext} from '@hooks/use-safe-context'
import {useCallback, useState} from 'react'
import type {CreateUserParams} from '@helpers/requests/users'

const useCreateUser = ( ) => {
	const {
		setMe,
		loggedIn,
		setAccessToken,
	} = useSafeContext(AuthenticationContext)

	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	// This callback is the main feature of the hook.
	const createUser = useCallback(
		async (params: CreateUserParams) => {
			setError(null)
			setLoading(true)

			try {
				// eslint-disable-next-line curly
				if (loggedIn === true) {
					throw new Error('Can\'t be logged in.')
				}

				// Attempt to create the user and update context data.
				const {user, accessToken} = await requestCreateUser(params)

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
		// Primary functionality
		createUser,

		// Function state data
		loading,
		error,
	}
}

export {useCreateUser}
