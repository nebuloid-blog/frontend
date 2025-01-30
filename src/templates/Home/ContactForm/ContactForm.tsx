'use client'

import {Button} from '@components/Button'
import {TextArea} from '@components/TextArea'
import {TextInput} from '@components/TextInput'
import {useForm as useFormspree} from '@formspree/react'
import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import type {FC} from 'react'

// IMPORTANT!
// This Hash ID does *NOT* need to be hidden away.
// See the docs: https://formspree.io/guides/nextjs/
const FORMSPREE_HASH_ID = 'xeqwkarl'

interface FieldTypes {
	name: string,
	email: string,
	message: string,
}

const ContactForm: FC<Record<never, never>> = ( ) => {
	const {register, handleSubmit} = useForm<FieldTypes>( )

	// Formspree expects a type that is more generic than
	//   the one that I provided... No good!
	// I used a simple dictionary interface, `FieldTypes`,
	//   which should match what the dependency expects.
	/* @ts-expect-error: Formspree's record is too generic. */
	const [formspree, sendToFormspree] = useFormspree<FieldTypes>(FORMSPREE_HASH_ID)

	const onSubmit = useCallback(
		async (data: FieldTypes) => {
			await sendToFormspree(data)
		},
		[sendToFormspree],
	)

	return (
		<form
			id = 'contact-form'
			onSubmit = {handleSubmit(onSubmit)}
		>
			<fieldset>
				<legend>
					Write a message
				</legend>

				<TextInput
					type = 'text'
					label = 'Name'
					required
					{...register('name')}
				/>

				<TextInput
					type = 'email'
					label = 'Email'
					required
					{...register('email')}
				/>

				<TextArea
					label = 'Message'
					required
					{...register('message')}
				/>

				<div
					// This div is used to style a super-basic
					//  form submission headsup display.
					//
					// TODO!
					// Refactor out this div and the contained <p>.
					// Definately not a production-ready layout.
					style = {{
						display: 'flex',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Button type = 'submit'>
						Send Message
					</Button>

					{formspree.succeeded && (
						<p style = {{margin: 0}}>
							<i>Your message has been sent!</i>
						</p>
					)}
				</div>
			</fieldset>
		</form>
	)
}

export {ContactForm}
