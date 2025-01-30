'use client'

import {createContext, useContext} from 'react'
import type {Context} from 'react'

// This safe context gets created as normal,
//  except its initial parameter can be left out.
const createSafeContext = <T>(defaultValue?: T) => (
	createContext(defaultValue)
)

// Because the default value can be undefined, we have to
//  filter it out somehow to provide type-safety elsewhere.
// One of the easiest ways is just to throw an error if this
//  value is never updated (ie, it was just left undefined).
const useSafeContext = <T>(safeContext: Context<T | undefined>) => {
	const contextValue = useContext(safeContext)
	const missingProviderError = new Error('useSafeContext must be used within a Provider.')

	if (contextValue == null) throw missingProviderError
	else return contextValue
}

export {createSafeContext, useSafeContext}
