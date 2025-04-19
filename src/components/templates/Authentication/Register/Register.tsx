/* eslint-disable max-lines-per-function */
'use client'

import {Button} from '@components/Button'
import {PageWrapper} from '@components/PageWrapper'
import {TextInput} from '@components/TextInput'
import {AuthenticationContext} from '@contexts/Authentication'
import {useCreateUser} from '@hooks/authentication'
import {useSafeContext} from '@hooks/use-safe-context'
import {FC, useMemo} from 'react'
import {useForm} from 'react-hook-form'

interface RegistrationFields {
	username: string,
	email: string,
	password: string,
	confirmPassword: string,
}


const Register: FC<Record<never, never>> = ( ) => {
	const {
		register: registerForm,
		handleSubmit,
	} = useForm<RegistrationFields>( )

	const {
		createUser,
		loading,
		error,
	} = useCreateUser( )

	const {
		me,
		accessToken,
		loggedIn,
	} = useSafeContext(AuthenticationContext)

	// This weaves together the form submission logic
	//  with the form submission handler.
	const onSubmit = useMemo(( ) => (
		handleSubmit(createUser)
	), [handleSubmit, createUser])

	const disabled = loading

	return (
		<PageWrapper>
			<form
				id = 'authentication-form'
				onSubmit = {onSubmit}
			>
				<fieldset>
					<legend>
						Sign Up
					</legend>

					<TextInput
						type = 'text'
						label = 'Username'
						disabled = {disabled}
						required
						{...registerForm('username')}
					/>

					<TextInput
						type = 'text'
						label = 'Email'
						disabled = {disabled}
						required
						{...registerForm('email')}
					/>


					<TextInput
						type = 'password'
						label = 'Password'
						disabled = {disabled}
						required
						{...registerForm('password')}
					/>

					<TextInput
						type = 'password'
						label = 'Confirm Password'
						required
						{...registerForm('confirmPassword')}
					/>

					<Button
						type = 'submit'
						disabled = {disabled}
					>
						Register
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

export {Register}
