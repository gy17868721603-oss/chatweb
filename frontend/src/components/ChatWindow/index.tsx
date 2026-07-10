import MessageItem from '../MessageItem'

export default function ChatWindow() {
  return (
    <div className="chat-window">
      <MessageItem role="assistant" content="你好，我是 Hermes。" />
    </div>
  )
}
