import type {Meta, StoryObj} from '@storybook/react'
import {BlockElements} from './BlockElements'

const metadata: Meta<typeof BlockElements> = {component: BlockElements}
const Normal: StoryObj<typeof BlockElements> = {args: { }}

export default metadata
export {Normal}
