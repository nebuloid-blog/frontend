/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
'use client'

import {Button} from '@components/Button'
import {PageWrapper} from '@components/PageWrapper'
import {TextInput} from '@components/TextInput'
import {AuthenticationContext} from '@contexts/Authentication'
import {useLoginUser, useLogoutUser} from '@hooks/authentication'
import {useSafeContext} from '@hooks/use-safe-context'
import {FC, useMemo} from 'react'
import {useForm} from 'react-hook-form'

interface SignInFields {
	username: string,
	password: string,
}

const SignIn: FC<Record<never, never>> = ( ) => {
	const {register, handleSubmit} = useForm<SignInFields>( )
	const {
		me,
		loggedIn,
		accessToken,
	} = useSafeContext(AuthenticationContext)

	const {
		loginUser,
		loading: loginLoading,
		error: loginError,
	} = useLoginUser( )

	const {
		logoutUser,
		loading: logoutLoading,
		error: logoutError,
	} = useLogoutUser( )

	// This weaves together the form submission logic
	//  with the form submission handler.
	const onSubmit = useMemo(( ) => (
		handleSubmit(loginUser)
	), [handleSubmit, loginUser])

	const loading = loginLoading || logoutLoading
	const error = loginError || logoutError
	const disabled = loading || loggedIn

	return (
		<PageWrapper>
			<form
				id = 'authentication-form'
				onSubmit = {onSubmit}
			>
				<fieldset>
					<legend>
						Sign In
					</legend>

					<TextInput
						type = 'text'
						label = 'Username'
						disabled = {disabled}
						required
						{...register('username')}
					/>

					<TextInput
						type = 'password'
						label = 'Password'
						disabled = {disabled}
						required
						{...register('password')}
					/>

					<Button
						type = 'submit'
						disabled = {disabled}
					>
						Log In
					</Button>

					<br />

					<Button
						type = 'button'
						color = 'secondary'
						disabled = {!disabled}
						onClick = {logoutUser}
					>
						Log Out
					</Button>
				</fieldset>
			</form>

			<main>
				<h1>Data</h1>
				<dl>
					<span>
						<dt>Loading?</dt>
						<dd>{loading ? 'YES' : 'NO'}</dd>
					</span>
					<span>
						<dt>Error?</dt>
						<dd>{error == null ? 'NO' : error.message}</dd>
					</span>
					<span>
						<dt>Logged-in?</dt>
						<dd>{loggedIn ? 'YES' : 'NO'}</dd>
					</span>
					<span>
						<dt>Username</dt>
						<dd>{me?.username ?? 'NONE'}</dd>
					</span>
					<span>
						<dt>Email</dt>
						<dd>{me?.email ?? 'NONE'}</dd>
					</span>
					<span>
						<dt>Role</dt>
						<dd>
							{me == null && 'NONE'}
							{me != null && <kbd>{me?.role ?? 'NONE'}</kbd>}
						</dd>
					</span>
					<span>
						<dt>ID</dt>
						<dd>
							{me == null && 'NONE'}
							{me != null && <samp>{me?.id ?? 'NONE'}</samp>}
						</dd>
					</span>
					<span>
						<dt>Access Token</dt>
						<dd>
							{accessToken == null && 'NONE'}
							{accessToken != null && (
								<textarea
									style = {{
										width: '100%',
										overflowWrap: 'anywhere',
										wordBreak: 'break-all',
										resize: 'none',
									}}
									disabled
									value = {accessToken}
								/>
							)}
						</dd>
					</span>
				</dl>
			</main>
		</PageWrapper>
	)
}

export {SignIn}
