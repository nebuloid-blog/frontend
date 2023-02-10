/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
		"\n\tquery GetArticle(\n\t\t$file: String!,\n\t\t$directory: String,\n\t\t$branch: String,\n\t) {\n\t\tgetArticle(\n\t\t\tfile: $file,\n\t\t\tdirectory: $directory,\n\t\t\tbranch: $branch,\n\t\t) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n": types.GetArticleDocument,
		"\n\tquery IndexArticles($branch: String) {\n\t\tindexArticles(branch: $branch) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n": types.IndexArticlesDocument,
};

export function graphql(source: "\n\tquery GetArticle(\n\t\t$file: String!,\n\t\t$directory: String,\n\t\t$branch: String,\n\t) {\n\t\tgetArticle(\n\t\t\tfile: $file,\n\t\t\tdirectory: $directory,\n\t\t\tbranch: $branch,\n\t\t) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetArticle(\n\t\t$file: String!,\n\t\t$directory: String,\n\t\t$branch: String,\n\t) {\n\t\tgetArticle(\n\t\t\tfile: $file,\n\t\t\tdirectory: $directory,\n\t\t\tbranch: $branch,\n\t\t) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"];
export function graphql(source: "\n\tquery IndexArticles($branch: String) {\n\t\tindexArticles(branch: $branch) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery IndexArticles($branch: String) {\n\t\tindexArticles(branch: $branch) {\n\t\t\thtml\n\t\t\tdata {\n\t\t\t\tslug\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<	infer TType,	any>	? TType	: never;