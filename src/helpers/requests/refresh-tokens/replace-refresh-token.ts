'use client'

import {
	replaceRefreshToken as replaceRefreshTokenQuery,
} from '@helpers/graphql/refresh-tokens'

import {backendUrl} from '@helpers/variables'
import {request} from 'graphql-request'

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
	const response = await request(
		backendUrl,
		replaceRefreshTokenQuery,
		{ },
	)

	return response.replaceRefreshToken
}

export {replaceRefreshToken}
export type {ReplaceRefreshTokenParams}
