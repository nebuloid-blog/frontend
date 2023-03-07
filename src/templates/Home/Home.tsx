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

type Props = InferGetStaticPropsType<typeof getStaticProps>
interface FieldTypes {
	name: string,
	email: string,
	message: string,
}

const Home: NextPage<Props> = ({article}) => {
	const {register, handleSubmit} = useForm<FieldTypes>( )
	const [formspree, sendToFormspree] = useFormspree('xeqwkarl')

	const onSubmit = useCallback(
		async (data: FieldTypes) => {
			await sendToFormspree(data)
		},
		[sendToFormspree],
	)

	return (<>
		<DefaultHead />

		<PageWrapper hero>
			<main>
				{article && (
					<RehypeHTML html={article.html} />
				)}
			</main>

			<section className={styles.contact}>
				<h2>Get in Touch</h2>

				<form
					id='contact-form'
					onSubmit={handleSubmit(onSubmit)}
				>
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
							<p style={{margin: 0}}><i>
									Your message has been sent!
							</i></p>
						)}
					</div>

				</form>
			</section>
		</PageWrapper>
	</>)
}

export {Home}
