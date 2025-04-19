import type {CodegenConfig} from '@graphql-codegen/cli'

/**
This config helps generate typescript types!

**/
const config: CodegenConfig = {
	// The schema should be set to
	//  'https://api.nebuloid.dev/'.
	// For local development, use
	//  'http://localhost:8080/' instead.
	schema: 'http://localhost:8080/',

	documents: ['src/**/*.{ts,tsx}'],
	generates: {
		'./src/types/generated/': {preset: 'client'},
	},
}

export default config
