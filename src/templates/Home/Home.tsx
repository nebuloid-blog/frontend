import {DefaultHead} from '@components/DefaultHead'
import {PageWrapper} from '@components/PageWrapper'
import {Addresses} from './Addresses'
import {ContactForm} from './ContactForm'
import styles from './Home.module.scss'
import type {getStaticProps} from './get-static-data'
import type {InferGetStaticPropsType, NextPage} from 'next'

// Home Template
type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({article}) => (
	<>
		<DefaultHead />

		<PageWrapper hero>
			{article && (
				<main dangerouslySetInnerHTML = {{__html: article.html}} />
			)}

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
