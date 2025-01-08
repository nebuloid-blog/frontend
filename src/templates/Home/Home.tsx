import type {FC} from 'react'
import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {useForm as useFormspree} from '@formspree/react'
import type {InferGetStaticPropsType, NextPage} from 'next'
import styles from './Home.module.scss'
import type {getStaticProps} from './get-static-data'
import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'
import {RehypeHTML} from '@components/RehypeHTML'
import {TextInput} from '@components/TextInput'
import {TextArea} from '@components/TextArea'
import {Button} from '@components/Button'

// Contact Form
const ContactForm: FC<Record<never, never>> = ( ) => {
	const {register, handleSubmit} = useForm<FieldTypes>( )
	const [formspree, sendToFormspree] = useFormspree('xeqwkarl')

	const onSubmit = useCallback(
		async (data: FieldTypes) => {
			/* @ts-expect-error: Formspree expects too generic a record. */
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

// Addresses Reference
const Addresses: FC<Record<never, never>> = ( ) => (
	<address>
		<dl>
			<div className={styles['definition-group']}>
				<dt>Location</dt>
				<dd>
					<i>Los Angeles, California</i>
				</dd>
			</div>

			<div className={styles['definition-group']}>
				<dt>Email</dt>
				<dd>
					<a href='mailto:hello@nebuloid.dev'>
						hello@nebuloid.dev
					</a>
				</dd>
			</div>

			<div className={styles['fill-group']}>
				<div className={styles['definition-group']}>
					<dt>Social</dt>
					<dd>
						<ul>
							<li>
								<a href='https://www.linkedin.com/in/noltron000/'>
									Linkedin
								</a>
							</li>

							<li>
								<a href='https://github.com/noltron000'>
									GitHub
								</a>
							</li>
						</ul>
					</dd>
				</div>
			</div>
		</dl>
	</address>
)

// Home Template
type Props = InferGetStaticPropsType<typeof getStaticProps>
interface FieldTypes {
	name: string,
	email: string,
	message: string,
}

const Home: NextPage<Props> = ({article}) => (
	<>
		<DefaultHead />

		<PageWrapper hero>
			<main>
				{article && (
					<RehypeHTML html={article.html} />
				)}
			</main>

			<section className={styles.contact}>
				<h2>Get in Touch</h2>
				<div className={styles.content}>
					<ContactForm />
					<Addresses />
				</div>
			</section>
		</PageWrapper>
	</>
)

export {Home}
