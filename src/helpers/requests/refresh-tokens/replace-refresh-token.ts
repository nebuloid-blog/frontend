'use client'

import {
	replaceRefreshToken as replaceRefreshTokenQuery,
} from '@helpers/graphql/refresh-tokens'

import {backendUrl} from '@helpers/variables'
import {GraphQLClient} from 'graphql-request'

type ReplaceRefreshTokenParams = never

/**
Given a particular refresh token (and proof you own it),
	this request deletes the refresh token from the db.
It also generates a new pair of access/refresh tokens for
	you to replace the old one.
**/
const replaceRefreshToken = async (
	params?: ReplaceRefreshTokenParams,
) => {
	// This client houses our API request method!
	const client = new GraphQLClient(
		backendUrl,
		// Create a custom fetch with credentials included.
		{fetch: (url, options) => (
			fetch(url, {...options, credentials: 'include'})
		)},
	)

	const response = await client.request(
		replaceRefreshTokenQuery,
		{ },
	)

	return response.replaceRefreshToken
}

export {replaceRefreshToken}
export type {ReplaceRefreshTokenParams}
