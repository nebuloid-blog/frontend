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
	createUser?: Maybe<Scalars['String']['output']>;
	deleteCourse: Scalars['Boolean']['output'];
	deleteProject: Scalars['Boolean']['output'];
	deleteUser: Scalars['Boolean']['output'];
	signInUser?: Maybe<Scalars['String']['output']>;
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
	role?: InputMaybe<Role>;
	username: Scalars['String']['input'];
};


export type MutationDeleteCourseArgs = {
	id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
	id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
	id: Scalars['ID']['input'];
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
	Guest = 'GUEST',
	Owner = 'OWNER',
	User = 'USER'
}

export type User = {
	__typename?: 'User';
	email: Scalars['String']['output'];
	id: Scalars['ID']['output'];
	role: Role;
	username: Scalars['String']['output'];
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


export const GetArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"directory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory"}}},{"kind":"Argument","name":{"kind":"Name","value":"branch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branch"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticleQuery, GetArticleQueryVariables>;
export const IndexArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IndexArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indexArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branch"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<IndexArticlesQuery, IndexArticlesQueryVariables>;