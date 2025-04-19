import {graphql} from '@app/types/generated'

const replaceRefreshToken = graphql(/* GraphQL */ `
	mutation ReplaceRefreshToken {
		replaceRefreshToken {
			accessToken
		}
	}
`)

const revokeRefreshToken = graphql(/* GraphQL */ `
	mutation RevokeRefreshToken {
		revokeRefreshToken
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
