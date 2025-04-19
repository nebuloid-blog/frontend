'use client'

import {useState, useEffect, useCallback} from 'react'

// For documentation about Local Storage, see also:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
const useLocalStorage = (key: string, initialValue?: string) => {
	[key] = useState(key) // Make immutable
	const [item, setItem] = useState(initialValue ?? null)

	// Load any existing local data for this key.
	// Do this only once, when the hook is first rendered.
	useEffect(( ) => {
		if (initialValue != null) {
			// Providing an initialValue overwrites the old datum.
			localStorage.setItem(key, initialValue)
		}
		else {
			const existingLocalDatum = localStorage.getItem(key)
			setItem(existingLocalDatum)
		}
	}, [ ])

	// This hook should update the local storage
	//  whenever the hook's setter is used.
	useEffect(( ) => {
		if (item == null) localStorage.removeItem(key)
		else localStorage.setItem(key, item)
	}, [item])


	// Delete any local data for this key.
	const deleteItem = useCallback(( ) => {
		setItem(null)
		localStorage.removeItem(key)
	}, [ ])

	// Return hook values in an array.
	return [
		item,
		setItem,
		deleteItem,
	] as const
}

export {useLocalStorage}
