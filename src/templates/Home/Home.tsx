import {Button} from '@components/Button'
import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'
import {RehypeHTML} from '@components/RehypeHTML'
import {TextArea} from '@components/TextArea'
import {TextInput} from '@components/TextInput'
import {useForm as useFormspree} from '@formspree/react'
import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Addresses} from './Addresses'
import styles from './Home.module.scss'
import type {getStaticProps} from './get-static-data'
import type {InferGetStaticPropsType, NextPage} from 'next'
import type {FC} from 'react'

// Contact Form
interface FieldTypes {
	name: string,
	email: string,
	message: string,
}

const ContactForm: FC<Record<never, never>> = ( ) => {
	const {register, handleSubmit} = useForm<FieldTypes>( )
	/* @ts-expect-error: Formspree expects too generic a record. */
	const [formspree, sendToFormspree] = useFormspree<FieldTypes>('xeqwkarl')

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

// Home Template
type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({article}) => (
	<>
		<DefaultHead />

		<PageWrapper hero>
			<main>
				{article && (
					<RehypeHTML html = {article.html} />
				)}
			</main>

			<section className = {styles.contact}>
				<h2>Get in Touch</h2>
				<div className = {styles.content}>
					<ContactForm />
					<Addresses />
				</div>
			</section>
		</PageWrapper>
	</>
)

export {Home}
