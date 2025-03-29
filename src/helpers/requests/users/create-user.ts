'use client'

import {
	createUser as createUserQuery,
} from '@helpers/graphql/users'

import {backendUrl} from '@helpers/variables'
import {request} from 'graphql-request'

interface CreateUserParams {
	username: string,
	email: string,
	password: string,
	confirmPassword: string,
}

/**
Mutation to create a new user.
Signup requires a username, password, and email.
The username and email must be unique!
**/
const createUser = async (
	params: CreateUserParams,
) => {
	if (params.password !== params.confirmPassword) {
		// Too bad, passwords don't match!!!
		throw new Error('Passwords do not match.')
	}

	const response = await request(
		backendUrl,
		createUserQuery,
		{
			username: params.username,
			password: params.password,
			email: params.email,
		},
	)

	return response.createUser
}

export {createUser}
export type {CreateUserParams}
