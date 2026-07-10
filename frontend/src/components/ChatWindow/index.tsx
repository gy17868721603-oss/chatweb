import MessageItem from '../MessageItem'
import { useChatStore } from '../../stores/chatStore'

/**
 * Hermes 聊天窗口组件
 *
 * 负责读取全局聊天状态并渲染消息列表。
 * 后续 Hermes Runtime 返回消息时，通过 store 更新即可自动刷新界面。
 */
export default function ChatWindow() {
  const messages = useChatStore((state) => state.messages)

  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <MessageItem role="assistant" content="你好，我是 Hermes。" />
      ) : (
        messages.map((message, index) => (
          <MessageItem
            key={index}
            role={message.role}
            content={message.content}
          />
        ))
      )}
    </div>
  )
}
