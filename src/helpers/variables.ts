/*
import {env} from './secrets'

const getBackendUrl = ( ) => {
	let backendUrl
	switch (env.NODE_ENV) {
		case ('production'): {
			backendUrl = 'https://api.nebuloid.dev/'
			break
		}

		default:
		case ('development'): {
			backendUrl = 'http://localhost:8080/'
			break
		}
	}

	return backendUrl
}
*/

// Only consts can be exported, so let's use a function.
// const backendUrl = 'http://localhost:8080/'
const backendUrl = 'https://api.nebuloid.dev/'

export {backendUrl}
