'use client'

import {
	revokeRefreshToken as revokeRefreshTokenQuery,
} from '@helpers/graphql/refresh-tokens'

import {backendUrl} from '@helpers/variables'
import {GraphQLClient} from 'graphql-request'

interface RevokeRefreshTokenParams {
	accessToken: string,
}

/**
Given a particular refresh token, this request
	deletes the refresh token from the db.
You don't need to be the owner of the token
	to delete it, if you are an admin.
**/
const revokeRefreshToken = async (
	params: RevokeRefreshTokenParams,
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
		revokeRefreshTokenQuery,
		{ },
		{Authorization: `Bearer ${params.accessToken}`},
	)

	return response.revokeRefreshToken
}

export {revokeRefreshToken}
export type {RevokeRefreshTokenParams}
