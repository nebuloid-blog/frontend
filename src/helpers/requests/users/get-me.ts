'use client'

import {getMe as getMeQuery} from '@helpers/graphql/users'
import {backendUrl} from '@helpers/variables'
import {request} from 'graphql-request'

interface GetMeParams {
	accessToken: string,
}

/**
Uses the given access token to request
	the current user's data.
**/
const getMe = async (params: GetMeParams) => {
	const response = await request(
		backendUrl,
		getMeQuery,
		{ },
		{Authorization: `Bearer ${params.accessToken}`},
	)

	return response.getMe
}

export {getMe}
export type {GetMeParams}
