/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string; }
	String: { input: string; output: string; }
	Boolean: { input: boolean; output: boolean; }
	Int: { input: number; output: number; }
	Float: { input: number; output: number; }
};

export type AdditionalEntityFields = {
	path?: InputMaybe<Scalars['String']['input']>;
	type?: InputMaybe<Scalars['String']['input']>;
};

export type Article = {
	__typename?: 'Article';
	data: ArticleData;
	html: Scalars['String']['output'];
};

export type ArticleData = {
	__typename?: 'ArticleData';
	slug: Scalars['String']['output'];
	title: Scalars['String']['output'];
};

export type Course = {
	__typename?: 'Course';
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	projects?: Maybe<Array<Project>>;
};

export type Mutation = {
	__typename?: 'Mutation';
	createCourse: Scalars['ID']['output'];
	createProject: Scalars['ID']['output'];
	createUser: UserAuth;
	deleteCourse: Scalars['Boolean']['output'];
	deleteProject: Scalars['Boolean']['output'];
	deleteUser: Scalars['Boolean']['output'];
	replaceRefreshToken: SignedTokens;
	revokeAllRefreshTokens: Scalars['Boolean']['output'];
	revokeAllRefreshTokensGlobal: Scalars['Boolean']['output'];
	revokeRefreshToken: Scalars['Boolean']['output'];
	signInUser: UserAuth;
	updateCourse: Scalars['Boolean']['output'];
	updateProject: Scalars['Boolean']['output'];
};


export type MutationCreateCourseArgs = {
	description?: InputMaybe<Scalars['String']['input']>;
	name: Scalars['String']['input'];
	projects?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationCreateProjectArgs = {
	courses?: InputMaybe<Array<Scalars['ID']['input']>>;
	description?: InputMaybe<Scalars['String']['input']>;
	name: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
	email: Scalars['String']['input'];
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};


export type MutationDeleteCourseArgs = {
	id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
	id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
	userId: Scalars['ID']['input'];
};


export type MutationReplaceRefreshTokenArgs = {
	refreshToken: Scalars['String']['input'];
};


export type MutationRevokeAllRefreshTokensArgs = {
	userId: Scalars['ID']['input'];
};


export type MutationRevokeRefreshTokenArgs = {
	refreshToken: Scalars['String']['input'];
};


export type MutationSignInUserArgs = {
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};


export type MutationUpdateCourseArgs = {
	id: Scalars['ID']['input'];
};


export type MutationUpdateProjectArgs = {
	id: Scalars['ID']['input'];
};

export type Project = {
	__typename?: 'Project';
	courses?: Maybe<Array<Course>>;
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
};

export type Query = {
	__typename?: 'Query';
	getArticle?: Maybe<Article>;
	getCourse?: Maybe<Course>;
	getMe?: Maybe<User>;
	getProject?: Maybe<Project>;
	indexArticles?: Maybe<Array<Article>>;
	indexCourses?: Maybe<Array<Course>>;
	indexProjects?: Maybe<Array<Project>>;
};


export type QueryGetArticleArgs = {
	branch?: InputMaybe<Scalars['String']['input']>;
	directory?: InputMaybe<Scalars['String']['input']>;
	file: Scalars['String']['input'];
};


export type QueryGetCourseArgs = {
	id: Scalars['ID']['input'];
};


export type QueryGetProjectArgs = {
	id: Scalars['ID']['input'];
};


export type QueryIndexArticlesArgs = {
	branch?: InputMaybe<Scalars['String']['input']>;
	directory?: InputMaybe<Scalars['String']['input']>;
};

export enum Role {
	Administrator = 'ADMINISTRATOR',
	Guest = 'GUEST',
	Moderator = 'MODERATOR',
	User = 'USER'
}

export type SignedTokens = {
	__typename?: 'SignedTokens';
	accessToken: Scalars['String']['output'];
	refreshToken: Scalars['String']['output'];
};

export type User = {
	__typename?: 'User';
	email: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	role: Role;
	username: Scalars['String']['output'];
};

export type UserAuth = {
	__typename?: 'UserAuth';
	tokens: SignedTokens;
	user: User;
};

export type GetArticleQueryVariables = Exact<{
	file: Scalars['String']['input'];
	directory?: InputMaybe<Scalars['String']['input']>;
	branch?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArticleQuery = { __typename?: 'Query', getArticle?: { __typename?: 'Article', html: string, data: { __typename?: 'ArticleData', slug: string, title: string } } | null };

export type IndexArticlesQueryVariables = Exact<{
	branch?: InputMaybe<Scalars['String']['input']>;
}>;


export type IndexArticlesQuery = { __typename?: 'Query', indexArticles?: Array<{ __typename?: 'Article', html: string, data: { __typename?: 'ArticleData', slug: string, title: string } }> | null };

export type ReplaceRefreshTokenMutationVariables = Exact<{
	refreshToken: Scalars['String']['input'];
}>;


export type ReplaceRefreshTokenMutation = { __typename?: 'Mutation', replaceRefreshToken: { __typename?: 'SignedTokens', accessToken: string, refreshToken: string } };

export type RevokeRefreshTokenMutationVariables = Exact<{
	refreshToken: Scalars['String']['input'];
}>;


export type RevokeRefreshTokenMutation = { __typename?: 'Mutation', revokeRefreshToken: boolean };

export type RevokeAllRefreshTokensMutationVariables = Exact<{
	userId: Scalars['ID']['input'];
}>;


export type RevokeAllRefreshTokensMutation = { __typename?: 'Mutation', revokeAllRefreshTokens: boolean };

export type RevokeAllRefreshTokensGlobalMutationVariables = Exact<{ [key: string]: never; }>;


export type RevokeAllRefreshTokensGlobalMutation = { __typename?: 'Mutation', revokeAllRefreshTokensGlobal: boolean };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe?: { __typename?: 'User', id: string, email: string, username: string, role: Role } | null };

export type CreateUserMutationVariables = Exact<{
	email: Scalars['String']['input'];
	username: Scalars['String']['input'];
	password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserAuth', user: { __typename?: 'User', id: string, email: string, username: string, role: Role }, tokens: { __typename?: 'SignedTokens', accessToken: string, refreshToken: string } } };

export type SignInUserMutationVariables = Exact<{
	username: Scalars['String']['input'];
	password: Scalars['String']['input'];
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'UserAuth', user: { __typename?: 'User', id: string, email: string, username: string, role: Role }, tokens: { __typename?: 'SignedTokens', accessToken: string, refreshToken: string } } };

export type DeleteUserMutationVariables = Exact<{
	userId: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };


export const GetArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"directory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory"}}},{"kind":"Argument","name":{"kind":"Name","value":"branch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branch"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticleQuery, GetArticleQueryVariables>;
export const IndexArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IndexArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indexArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branch"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<IndexArticlesQuery, IndexArticlesQueryVariables>;
export const ReplaceRefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ReplaceRefreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replaceRefreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<ReplaceRefreshTokenMutation, ReplaceRefreshTokenMutationVariables>;
export const RevokeRefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeRefreshToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeRefreshToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}]}]}}]} as unknown as DocumentNode<RevokeRefreshTokenMutation, RevokeRefreshTokenMutationVariables>;
export const RevokeAllRefreshTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeAllRefreshTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeAllRefreshTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<RevokeAllRefreshTokensMutation, RevokeAllRefreshTokensMutationVariables>;
export const RevokeAllRefreshTokensGlobalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RevokeAllRefreshTokensGlobal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revokeAllRefreshTokensGlobal"}}]}}]} as unknown as DocumentNode<RevokeAllRefreshTokensGlobalMutation, RevokeAllRefreshTokensGlobalMutationVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const SignInUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignInUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]}}]} as unknown as DocumentNode<SignInUserMutation, SignInUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;