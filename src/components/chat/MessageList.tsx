import AssistantMessage from './AssistantMessage'
import UserMessage from './UserMessage'

export interface ChatMessage {
  id?: string
  role: 'user' | 'assistant' | 'system'
  content: string
}

interface MessageListProps {
  messages: ChatMessage[]
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex flex-col overflow-y-auto">
      {messages.map((message, index) =>
        message.role === 'user' ? (
          <UserMessage key={message.id ?? index} content={message.content} />
        ) : (
          <AssistantMessage key={message.id ?? index} content={message.content} />
        ),
      )}
    </div>
  )
}
