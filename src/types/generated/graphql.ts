/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type AdditionalEntityFields = {
	path?: InputMaybe<Scalars['String']>;
	type?: InputMaybe<Scalars['String']>;
};

export type Article = {
	__typename?: 'Article';
	data: ArticleData;
	html: Scalars['String'];
};

export type ArticleData = {
	__typename?: 'ArticleData';
	slug: Scalars['String'];
	title: Scalars['String'];
};

export type Course = {
	__typename?: 'Course';
	description?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	name: Scalars['String'];
	projects?: Maybe<Array<Project>>;
};

export type Mutation = {
	__typename?: 'Mutation';
	createCourse: Scalars['ID'];
	createProject: Scalars['ID'];
	createUser?: Maybe<Scalars['String']>;
	deleteCourse: Scalars['Boolean'];
	deleteProject: Scalars['Boolean'];
	deleteUser: Scalars['Boolean'];
	signInUser?: Maybe<Scalars['String']>;
	updateCourse: Scalars['Boolean'];
	updateProject: Scalars['Boolean'];
};


export type MutationCreateCourseArgs = {
	description?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	projects?: InputMaybe<Array<Scalars['ID']>>;
};


export type MutationCreateProjectArgs = {
	courses?: InputMaybe<Array<Scalars['ID']>>;
	description?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
};


export type MutationCreateUserArgs = {
	email: Scalars['String'];
	password: Scalars['String'];
	role?: InputMaybe<Role>;
	username: Scalars['String'];
};


export type MutationDeleteCourseArgs = {
	id: Scalars['ID'];
};


export type MutationDeleteProjectArgs = {
	id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
	id: Scalars['ID'];
};


export type MutationSignInUserArgs = {
	password: Scalars['String'];
	username: Scalars['String'];
};


export type MutationUpdateCourseArgs = {
	id: Scalars['ID'];
};


export type MutationUpdateProjectArgs = {
	id: Scalars['ID'];
};

export type Project = {
	__typename?: 'Project';
	courses?: Maybe<Array<Course>>;
	description?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	name: Scalars['String'];
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
	branch?: InputMaybe<Scalars['String']>;
	directory?: InputMaybe<Scalars['String']>;
	file: Scalars['String'];
};


export type QueryGetCourseArgs = {
	id: Scalars['ID'];
};


export type QueryGetProjectArgs = {
	id: Scalars['ID'];
};


export type QueryIndexArticlesArgs = {
	branch?: InputMaybe<Scalars['String']>;
	directory?: InputMaybe<Scalars['String']>;
};

export enum Role {
	Guest = 'GUEST',
	Owner = 'OWNER',
	User = 'USER'
}

export type User = {
	__typename?: 'User';
	email: Scalars['String'];
	id: Scalars['ID'];
	role: Role;
	username: Scalars['String'];
};

export type GetArticleQueryVariables = Exact<{
	file: Scalars['String'];
	directory?: InputMaybe<Scalars['String']>;
	branch?: InputMaybe<Scalars['String']>;
}>;


export type GetArticleQuery = { __typename?: 'Query', getArticle?: { __typename?: 'Article', html: string, data: { __typename?: 'ArticleData', slug: string, title: string } } | null };

export type IndexArticlesQueryVariables = Exact<{
	branch?: InputMaybe<Scalars['String']>;
}>;


export type IndexArticlesQuery = { __typename?: 'Query', indexArticles?: Array<{ __typename?: 'Article', html: string, data: { __typename?: 'ArticleData', slug: string, title: string } }> | null };


export const GetArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directory"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"directory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directory"}}},{"kind":"Argument","name":{"kind":"Name","value":"branch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branch"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticleQuery, GetArticleQueryVariables>;
export const IndexArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IndexArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"branch"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indexArticles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"branch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"branch"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<IndexArticlesQuery, IndexArticlesQueryVariables>;