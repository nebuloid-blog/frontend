import {useState, useEffect, useCallback} from 'react'

// For documentation about Local Storage, see also:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
const useLocalStorage = (key: string, initialValue?: string) => {
	// For reference, "Datum" is the singular form of "Data".
	const [localDatum, setLocalDatum] = useState(initialValue ?? null)

	// Load any existing local data for this key.
	// Do this only once, when the hook is first rendered.
	useEffect(( ) => {
		if (initialValue != null) {
			// Providing an initialValue overwrites the old datum.
			localStorage.setItem(key, initialValue)
		}
		else {
			const existingLocalDatum = localStorage.getItem(key)
			setLocalDatum(existingLocalDatum)
		}
	}, [ ])

	// This hook should update the local storage
	//  whenever the hook's setter is used.
	useEffect(( ) => {
		if (localDatum == null) localStorage.removeItem(key)
		else localStorage.setItem(key, localDatum)
	}, [localDatum])


	// Delete any local data for this key.
	const deleteLocalDatum = useCallback(( ) => {
		setLocalDatum(null)
		localStorage.removeItem(key)
	}, [ ])

	// Return hook values in an array.
	return [
		localDatum,
		setLocalDatum,
		deleteLocalDatum,
	] as const
}

export {useLocalStorage}
