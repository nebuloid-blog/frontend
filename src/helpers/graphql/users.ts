import {graphql} from '@app/types/generated'

/* USER COLLECTIONS / INDEX / GET */
const getMe = graphql(/* GraphQL */ `
	query GetMe {
		getMe {
			id
			email
			username
			role
		}
	}
`)

/* AUTHENTICATION / POST / PUT / DELETE */
const createUser = graphql(/* GraphQL */ `
	mutation CreateUser(
		$email: String!,
		$username: String!,
		$password: String!,
	) {
		createUser(
			email: $email,
			username: $username,
			password: $password,
		) {
			user {
				id
				email
				username
				role
			}
			accessToken
		}
	}
`)

const signInUser = graphql(/* GraphQL */ `
	mutation SignInUser(
		$username: String!,
		$password: String!,
	) {
		signInUser(
			username: $username,
			password: $password,
		) {
			user {
				id
				email
				username
				role
			}
			accessToken
		}
	}
`)

const deleteUser = graphql(/* GraphQL */ `
	mutation DeleteUser($userId: ID!) {
		deleteUser(userId: $userId)
	}
`)

export {
	getMe,

	createUser,
	signInUser,
	deleteUser,
}
