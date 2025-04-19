'use client'

import {
	signInUser as loginUserQuery,
} from '@helpers/graphql/users'

import {backendUrl} from '@helpers/variables'
import {GraphQLClient} from 'graphql-request'

interface LoginUserParams {
	username: string,
	password: string,
}

/**
Given a username and password,
	this returns a user plus their auth tokens.
**/
const loginUser = async (
	params: LoginUserParams,
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
		loginUserQuery,
		{
			username: params.username,
			password: params.password,
		},
	)

	return response.signInUser
}

export {loginUser}
export type {LoginUserParams}
