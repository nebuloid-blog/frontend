/* eslint-disable no-unused-vars */

interface DotEnv {
	// Override generic type-any variables to type-unknown
	[key: string]: unknown,

	// NextJS variables
	NODE_ENV: 'production' | 'development' | 'test',
	TZ?: string | undefined,
}

// Required to allow `process.env` to extend
//  our lovely interface that's defined just above.
declare global {
	namespace NodeJS {
		interface ProcessEnv extends DotEnv { }
	}
}

export type {DotEnv}
