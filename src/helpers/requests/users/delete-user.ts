'use client'

import {
	deleteUser as deleteUserQuery,
} from '@helpers/graphql/users'

import {backendUrl} from '@helpers/variables'
import {request} from 'graphql-request'

interface DeleteUserParams {
	accessToken: string,
	userId: string,
}

/**
This route deletes your account.
If you are an admin, you can give any user ID
	instead of using your own user ID.

TODO: Make userId optional.
**/
const deleteUser = async (
	params: DeleteUserParams,
) => {
	const response = await request(
		backendUrl,
		deleteUserQuery,
		{userId: params.userId},
		{Authorization: `Bearer ${params.accessToken}`},
	)

	return response.deleteUser
}

export {deleteUser}
export type {DeleteUserParams}
