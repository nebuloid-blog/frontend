'use client'

import {useCallback, useEffect, useMemo, useState} from 'react'

// Max age is 1 week on the frontend.
const MAX_COOKIE_AGE_IN_SECONDS = 60 * 60 * 24 * 7
//                                min. hour day  week

// For documentation about DOM Cookies, see also:
// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
const useDocumentCookie = (
	key: string,
	initialValue?: string,
) => {
	[key] = useState(key) // Make immutable
	const [rawCookie, setRawCookie] = useState(document.cookie)

	const cookie = useMemo(( ) => {
		const result = rawCookie
		// Split up cookie string into an array of entries.
		.split('; ')
		// Remove excess data except for the given key.
		.find((row) => row.startsWith(`${key}=`))

		// Return null if the value was not found.
		if (result == null) return null
		// Get all data after the first equals-sign appears.
		else return result.substring(result.indexOf('=') + 1)
	}, [key, rawCookie])

	const setCookie = useCallback((newValue: string) => {
		const cookieString = (
			`${key}=${newValue};`
			+ `max-age=${MAX_COOKIE_AGE_IN_SECONDS};`
			+ 'secure'
		)
		// Change the cookie and reflect it in the state.
		document.cookie = cookieString
		setRawCookie(document.cookie)
	}, [key])

	const deleteCookie = useCallback(( ) => {
		// Change the cookie and reflect it in the state.
		document.cookie = `${key}=0; max-age=0`
		setRawCookie(document.cookie)
	}, [key])

	// Fire this hook once to set the initial value.
	useEffect(( ) => {
		if (initialValue != null) setCookie(initialValue)
	}, [ ])

	return [
		cookie,
		setCookie,
		deleteCookie,
	] as const
}

export {useDocumentCookie}
