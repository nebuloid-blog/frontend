'use client'

import {GetMeQuery} from '@app/types/generated/graphql'
import {replaceRefreshToken} from '@helpers/requests/refresh-tokens'
import {getMe} from '@helpers/requests/users'
import {useCallback, useEffect, useRef, useState} from 'react'

type Me = NonNullable<GetMeQuery['getMe']>

const useAuthentication = ( ) => {
	const [
		me,
		setMe,
	] = useState<Me | null>(null)

	const [
		accessToken,
		setAccessToken,
	] = useState<string | null>(null)

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	// Created just to clear access token quickly.
	const clearAccessToken = useCallback(( ) => {
		setAccessToken(null)
	}, [ ])

	const loggedIn = accessToken != null

	// Run this only once on mount.
	useEffect(
		// This is an `async` iife function.
		// Since `useEffect` expects no promise, we void it out.
		( ) => void (async ( ) => {
			setError(null)
			setLoading(true)

			try {
				// Attempt to replace the refresh token and make an access token.
				const {accessToken} = await replaceRefreshToken( )

				// Attempt to obtain the current user.
				const me = await getMe({accessToken})
				if (me == null) throw new Error('Can\'t find user.')

				setMe(me)
				setAccessToken(accessToken)
				setLoading(false)
			}

			catch (error) {
				clearAccessToken( )
				setError(error as Error)
				setLoading(false)
			}
		})( ),
		[/* Must remain empty. */],
	)

	return {
		// Access Token
		accessToken,
		setAccessToken,
		clearAccessToken,

		// User Data
		me,
		setMe,
		loggedIn,

		// Loading State
		loading,
		error,
	}
}

export {useAuthentication}
