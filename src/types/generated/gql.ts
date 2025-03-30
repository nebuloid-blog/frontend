/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
		"\n\tquery GetArticle(\n\t\t$file: String!,\n\t\t$directory: String,\n\t\t$branch: String,\n\t) {\n\t\tgetArticle(\n\t\t\tfile: $file,\n\t\t\tdirectory: $directory,\n\t\t\tbranch: $branch,\n\t\t) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n": types.GetArticleDocument,
		"\n\tquery IndexArticles($branch: String) {\n\t\tindexArticles(branch: $branch) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n": types.IndexArticlesDocument,
		"\n\tmutation ReplaceRefreshToken($refreshToken: String!) {\n\t\treplaceRefreshToken(refreshToken: $refreshToken) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n": types.ReplaceRefreshTokenDocument,
		"\n\tmutation RevokeRefreshToken($refreshToken: String!) {\n\t\trevokeRefreshToken(refreshToken: $refreshToken)\n\t}\n": types.RevokeRefreshTokenDocument,
		"\n\tmutation RevokeAllRefreshTokens($userId: ID!) {\n\t\trevokeAllRefreshTokens(userId: $userId)\n\t}\n": types.RevokeAllRefreshTokensDocument,
		"\n\tmutation RevokeAllRefreshTokensGlobal {\n\t\trevokeAllRefreshTokensGlobal\n\t}\n": types.RevokeAllRefreshTokensGlobalDocument,
		"\n\tquery GetMe {\n\t\tgetMe {\n\t\t\tid\n\t\t\temail\n\t\t\tusername\n\t\t\trole\n\t\t}\n\t}\n": types.GetMeDocument,
		"\n\tmutation CreateUser(\n\t\t$email: String!,\n\t\t$username: String!,\n\t\t$password: String!,\n\t) {\n\t\tcreateUser(\n\t\t\temail: $email,\n\t\t\tusername: $username,\n\t\t\tpassword: $password,\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tusername\n\t\t\t\trole\n\t\t\t}\n\t\t\ttokens {\n\t\t\t\taccessToken\n\t\t\t\trefreshToken\n\t\t\t}\n\t\t}\n\t}\n": types.CreateUserDocument,
		"\n\tmutation SignInUser(\n\t\t$username: String!,\n\t\t$password: String!,\n\t) {\n\t\tsignInUser(\n\t\t\tusername: $username,\n\t\t\tpassword: $password,\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tusername\n\t\t\t\trole\n\t\t\t}\n\t\t\ttokens {\n\t\t\t\taccessToken\n\t\t\t\trefreshToken\n\t\t\t}\n\t\t}\n\t}\n": types.SignInUserDocument,
		"\n\tmutation DeleteUser($userId: ID!) {\n\t\tdeleteUser(userId: $userId)\n\t}\n": types.DeleteUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetArticle(\n\t\t$file: String!,\n\t\t$directory: String,\n\t\t$branch: String,\n\t) {\n\t\tgetArticle(\n\t\t\tfile: $file,\n\t\t\tdirectory: $directory,\n\t\t\tbranch: $branch,\n\t\t) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetArticle(\n\t\t$file: String!,\n\t\t$directory: String,\n\t\t$branch: String,\n\t) {\n\t\tgetArticle(\n\t\t\tfile: $file,\n\t\t\tdirectory: $directory,\n\t\t\tbranch: $branch,\n\t\t) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery IndexArticles($branch: String) {\n\t\tindexArticles(branch: $branch) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery IndexArticles($branch: String) {\n\t\tindexArticles(branch: $branch) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation ReplaceRefreshToken($refreshToken: String!) {\n\t\treplaceRefreshToken(refreshToken: $refreshToken) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation ReplaceRefreshToken($refreshToken: String!) {\n\t\treplaceRefreshToken(refreshToken: $refreshToken) {\n\t\t\taccessToken\n\t\t\trefreshToken\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation RevokeRefreshToken($refreshToken: String!) {\n\t\trevokeRefreshToken(refreshToken: $refreshToken)\n\t}\n"): (typeof documents)["\n\tmutation RevokeRefreshToken($refreshToken: String!) {\n\t\trevokeRefreshToken(refreshToken: $refreshToken)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation RevokeAllRefreshTokens($userId: ID!) {\n\t\trevokeAllRefreshTokens(userId: $userId)\n\t}\n"): (typeof documents)["\n\tmutation RevokeAllRefreshTokens($userId: ID!) {\n\t\trevokeAllRefreshTokens(userId: $userId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation RevokeAllRefreshTokensGlobal {\n\t\trevokeAllRefreshTokensGlobal\n\t}\n"): (typeof documents)["\n\tmutation RevokeAllRefreshTokensGlobal {\n\t\trevokeAllRefreshTokensGlobal\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetMe {\n\t\tgetMe {\n\t\t\tid\n\t\t\temail\n\t\t\tusername\n\t\t\trole\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetMe {\n\t\tgetMe {\n\t\t\tid\n\t\t\temail\n\t\t\tusername\n\t\t\trole\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateUser(\n\t\t$email: String!,\n\t\t$username: String!,\n\t\t$password: String!,\n\t) {\n\t\tcreateUser(\n\t\t\temail: $email,\n\t\t\tusername: $username,\n\t\t\tpassword: $password,\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tusername\n\t\t\t\trole\n\t\t\t}\n\t\t\ttokens {\n\t\t\t\taccessToken\n\t\t\t\trefreshToken\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateUser(\n\t\t$email: String!,\n\t\t$username: String!,\n\t\t$password: String!,\n\t) {\n\t\tcreateUser(\n\t\t\temail: $email,\n\t\t\tusername: $username,\n\t\t\tpassword: $password,\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tusername\n\t\t\t\trole\n\t\t\t}\n\t\t\ttokens {\n\t\t\t\taccessToken\n\t\t\t\trefreshToken\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation SignInUser(\n\t\t$username: String!,\n\t\t$password: String!,\n\t) {\n\t\tsignInUser(\n\t\t\tusername: $username,\n\t\t\tpassword: $password,\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tusername\n\t\t\t\trole\n\t\t\t}\n\t\t\ttokens {\n\t\t\t\taccessToken\n\t\t\t\trefreshToken\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation SignInUser(\n\t\t$username: String!,\n\t\t$password: String!,\n\t) {\n\t\tsignInUser(\n\t\t\tusername: $username,\n\t\t\tpassword: $password,\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t\tusername\n\t\t\t\trole\n\t\t\t}\n\t\t\ttokens {\n\t\t\t\taccessToken\n\t\t\t\trefreshToken\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation DeleteUser($userId: ID!) {\n\t\tdeleteUser(userId: $userId)\n\t}\n"): (typeof documents)["\n\tmutation DeleteUser($userId: ID!) {\n\t\tdeleteUser(userId: $userId)\n\t}\n"];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<	infer TType,	any>	? TType	: never;