'use client'

import {PageWrapper} from '@components/PageWrapper'
import {TextArea} from '@components/TextArea'
import OpenAI from 'openai'
import {useCallback, useState} from 'react'
import {useForm} from 'react-hook-form'
import apiKey from './secret'

const openai = new OpenAI({
	apiKey: apiKey,
	dangerouslyAllowBrowser: true,
})

/* CHAT GPT API CALL (WILL PUT IN BACKEND) */
const createCompletion = async (message: string) => (
	await openai.chat.completions.create({
		model: 'gpt-4o-mini',
		messages: [
			{
				role: 'developer',
				// eslint-disable-next-line @stylistic/max-len
				content: 'You are a secretary chatbot on "https://nebuloid.dev". You represent the full-stack developer, "Nolan Kovacik". Keep your chat responses: (1) short- or medium-length, (2) professional, and (3) helpful!',
			},
			{
				role: 'user',
				content: message,
			},
		],
		store: true,
	})
)

/* CHAT MESSAGE DATA CLASS */
class ChatMessage {
	content: string

	type: 'sent' | 'received'

	constructor (content: string, type: 'sent' | 'received') {
		this.content = content
		this.type = type
	}
}


/* CHAT BUBBLE COMPONENT */
interface ChatBubbleProps {
	children: string,
	type: 'sent' | 'received',
}

const ChatBubble = (props: ChatBubbleProps) => {
	const color = props.type === 'sent'
		? 'blue'
		: 'gray'

	const alignment = props.type === 'sent'
		? 'flex-end'
		: 'flex-start'

	const borderTopRightRadius = props.type === 'sent'
		? '0'
		: '1rem'

	const borderTopLeftRadius = props.type === 'sent'
		? '1rem'
		: '0'

	return (
		<li
			style = {{
				backgroundColor: color,
				padding: '1rem',
				margin: '1rem',
				width: 'fit-content',
				alignSelf: alignment,
				borderRadius: '1rem',
				borderTopRightRadius: borderTopRightRadius,
				borderTopLeftRadius: borderTopLeftRadius,
			}}
		>
			{props.children}
		</li>
	)
}

/* CHAT SECTION COMPONENT */
interface FieldTypes {
	message: string,
}

const Chat = ( ) => {
	const [messages, setMessages] = useState<ChatMessage[]>([])
	const {register, reset, handleSubmit} = useForm<FieldTypes>( )


	const onSubmit = useCallback(
		async (data: FieldTypes) => {
			const sentMessage = new ChatMessage(data.message, 'sent')
			setMessages([...messages, sentMessage])

			const response = await createCompletion(data.message)
			const botMessage = response.choices.at(0)?.message.content

			if (botMessage) {
				const receivedMessage = new ChatMessage(botMessage, 'received')
				setMessages([...messages, sentMessage, receivedMessage])
			}

			reset( )
		},
		[messages, reset],
	)

	return (
		<PageWrapper>
			<h1>Chat</h1>

			<ol
				style = {{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{messages.map((message, index) => (
					<ChatBubble
						key = {index}
						type = {message.type}
					>
						{message.content}
					</ChatBubble>
				))}
			</ol>

			<form
				id = 'chat-form'
				onSubmit = {handleSubmit(onSubmit)}
			>
				<fieldset>
					<legend>
						Write a message
					</legend>

					<TextArea
						label = 'Message'
						required
						{...register('message')}
					/>

					<button type = 'submit'>
						Send Message
					</button>
				</fieldset>
			</form>
		</PageWrapper>
	)
}

export {Chat}
