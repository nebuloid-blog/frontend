import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
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
	const onSubmit = useCallback(
		(data: FieldTypes) => {
			console.warn(
				'Hey!',
				'You pressed the form submit button.',
				'This function hasn\'t been set up yet.',
				'You can still see the form data, however:',
			)
			console.table({...data})
		},
		[ ],
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
				<h2>Contact Me</h2>

				<form
					id='contact-form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<TextInput
						type='text'
						label='Name'
						{...register('name')}
					/>

					<TextInput
						type='email'
						label='Email'
						{...register('email')}
					/>

					<TextArea
						label='Message'
						{...register('message')}
					/>

					<Button type='submit'>
						Send Message
					</Button>
				</form>
			</section>
		</PageWrapper>
	</>)
}

export {Home}
