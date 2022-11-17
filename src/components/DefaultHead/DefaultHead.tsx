import Head from 'next/head'
import React from 'react'

interface Props {
	children?: React.ReactNode,
}

const DefaultHead: React.FC<Props> = ({children}) => (
	<Head>
		<title>Nebuloid</title>
		<meta
			name='description'
			content='Nebuloid: a personal dev blog &amp; portfolio'
		/>
		<link
			rel='icon'
			href='/vercel.ico'
		/>
		{children}
	</Head>
)


export {DefaultHead}
