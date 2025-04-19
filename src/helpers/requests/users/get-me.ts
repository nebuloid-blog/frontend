'use client'

import {getMe as getMeQuery} from '@helpers/graphql/users'
import {backendUrl} from '@helpers/variables'
import {GraphQLClient} from 'graphql-request'

interface GetMeParams {
	accessToken: string,
}

/**
Uses the given access token to request
	the current user's data.
**/
const getMe = async (params: GetMeParams) => {
	// This client houses our API request method!
	const client = new GraphQLClient(backendUrl)

	const response = await client.request(
		getMeQuery,
		{ },
		{Authorization: `Bearer ${params.accessToken}`},
	)

	return response.getMe
}

export {getMe}
export type {GetMeParams}
