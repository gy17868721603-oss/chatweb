import { useEffect, useRef } from 'react'
import MessageItem from '../MessageItem'
import { useChatStore } from '../../stores/chatStore'

/**
 * Hermes 聊天窗口组件
 *
 * 负责消息渲染、自动滚动以及 Agent 状态展示。
 */
export default function ChatWindow() {
  const messages = useChatStore((state) => state.messages)
  const loading = useChatStore((state) => state.loading)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, loading])

  return (
    <div ref={containerRef} className="chat-window">
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

      {loading && (
        <MessageItem role="assistant" content="Hermes 正在思考..." />
      )}
    </div>
  )
}
