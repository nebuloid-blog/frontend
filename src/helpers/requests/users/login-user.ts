'use client'

import {
	signInUser as loginUserQuery,
} from '@helpers/graphql/users'

import {backendUrl} from '@helpers/variables'
import {request} from 'graphql-request'

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
	const response = await request(
		backendUrl,
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
