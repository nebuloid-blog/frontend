import type {FC} from 'react'
import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {useForm as useFormspree} from '@formspree/react'
import {TextInput} from '@components/TextInput'
import {TextArea} from '@components/TextArea'
import {Button} from '@components/Button'

const FORMSPREE_KEY = 'xeqwkarl'

interface FieldTypes {
	name: string,
	email: string,
	message: string,
}

// Contact Form
const ContactForm: FC<Record<never, never>> = ( ) => {
	const {register, handleSubmit} = useForm<FieldTypes>( )
	const [formspree, sendToFormspree] = useFormspree(FORMSPREE_KEY)

	const onSubmit = useCallback(
		async (data: FieldTypes) => {
			await sendToFormspree(data)
		},
		[sendToFormspree],
	)

	return (
		<form
			id='contact-form'
			onSubmit={handleSubmit(onSubmit)}
		>
			<fieldset>
				<legend>
					Write a message
				</legend>

				<TextInput
					type='text'
					label='Name'
					required
					{...register('name')}
				/>

				<TextInput
					type='email'
					label='Email'
					required
					{...register('email')}
				/>

				<TextArea
					label='Message'
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
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Button type='submit'>
						Send Message
					</Button>

					{formspree.succeeded && (
						<p style={{margin: 0}}>
							<i>
								Your message has been sent!
							</i>
						</p>
					)}
				</div>
			</fieldset>
		</form>
	)
}

export {ContactForm}
