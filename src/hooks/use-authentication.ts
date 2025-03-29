'use client'

import {GetMeQuery} from '@app/types/generated/graphql'
import {replaceRefreshToken} from '@helpers/requests/refresh-tokens'
import {getMe} from '@helpers/requests/users'
import {useCallback, useEffect, useState} from 'react'
import {useDocumentCookie} from './use-document-cookie'

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

	const [
		refreshToken,
		setRefreshToken,
		clearRefreshToken,
	] = useDocumentCookie('refreshToken')

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)

	// Created just to have symmetry with clearRefreshToken.
	const clearAccessToken: (( ) => void) = useCallback(
		( ) => void setAccessToken(null),
		[ ],
	)

	const loggedIn = refreshToken != null

	// Run this only once on mount.
	useEffect(
		// This is an `async` iife function.
		// Since `useEffect` expects no promise, we void it out.
		( ) => void (async ( ) => {
			setError(null)
			setLoading(true)

			if (refreshToken == null) {
				// No refresh token.
				setLoading(false)
				return
			}

			try {
				// Attempt to replace the refresh token and make an access token.
				const tokens = await replaceRefreshToken({refreshToken})

				// Attempt to obtain the current user.
				const me = await getMe({accessToken: tokens.accessToken})
				if (me == null) throw new Error('Can\'t find user.')

				setMe(me)
				setAccessToken(tokens.accessToken)
				setRefreshToken(tokens.refreshToken)
				setLoading(false)
			}

			catch (error) {
				clearAccessToken( )
				clearRefreshToken( )
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

		// Refresh Token
		refreshToken,
		setRefreshToken,
		clearRefreshToken,

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
