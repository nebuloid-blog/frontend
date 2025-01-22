import Head from 'next/head'
import type {FC, ReactNode} from 'react'

interface Props {
	children?: ReactNode,
}

const DefaultHead: FC<Props> = ({children}) => (
	<Head>
		<title>Nebuloid</title>
		<meta
			name = 'description'
			content = 'Nebuloid: a personal dev blog &amp; portfolio'
		/>
		<link
			rel = 'icon'
			href = '/vercel.ico'
		/>
		{children}
	</Head>
)


export {DefaultHead}
