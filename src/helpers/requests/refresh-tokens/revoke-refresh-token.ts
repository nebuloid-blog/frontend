'use client'

import {
	revokeRefreshToken as revokeRefreshTokenQuery,
} from '@helpers/graphql/refresh-tokens'

import {backendUrl} from '@helpers/variables'
import {request} from 'graphql-request'


interface RevokeRefreshTokenParams {
	accessToken: string,
	refreshToken: string,
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
	const response = await request(
		backendUrl,
		revokeRefreshTokenQuery,
		{refreshToken: params.refreshToken},
		{Authorization: `Bearer ${params.accessToken}`},
	)

	return response.revokeRefreshToken
}

export {revokeRefreshToken}
export type {RevokeRefreshTokenParams}
