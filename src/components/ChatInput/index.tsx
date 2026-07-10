import { useState } from 'react'
import { useChatStore } from '../../stores/chatStore'

interface ChatInputProps {
  onSend?: (message: string) => void
}

/**
 * 星云智能体聊天输入组件。
 */
export default function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState('')
  const loading = useChatStore((state) => state.loading)

  function submit() {
    const message = value.trim()
    if (!message || loading) return

    onSend?.(message)
    setValue('')
  }

  return (
    <div className="chat-input-box">
      <textarea
        value={value}
        disabled={loading}
        placeholder={loading ? '星云智能体正在思考...' : '输入消息...'}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            submit()
          }
        }}
      />
      <button disabled={loading} onClick={submit}>
        发送
      </button>
    </div>
  )
}
