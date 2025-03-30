import {graphql} from '@app/types/generated'

const replaceRefreshToken = graphql(/* GraphQL */ `
	mutation ReplaceRefreshToken($refreshToken: String!) {
		replaceRefreshToken(refreshToken: $refreshToken) {
			accessToken
			refreshToken
		}
	}
`)

const revokeRefreshToken = graphql(/* GraphQL */ `
	mutation RevokeRefreshToken($refreshToken: String!) {
		revokeRefreshToken(refreshToken: $refreshToken)
	}
`)

const revokeAllRefreshTokens = graphql(/* GraphQL */ `
	mutation RevokeAllRefreshTokens($userId: ID!) {
		revokeAllRefreshTokens(userId: $userId)
	}
`)

const revokeAllRefreshTokensGlobal = graphql(/* GraphQL */ `
	mutation RevokeAllRefreshTokensGlobal {
		revokeAllRefreshTokensGlobal
	}
`)

export {
	replaceRefreshToken,
	revokeRefreshToken,
	revokeAllRefreshTokens,
	revokeAllRefreshTokensGlobal,
}
