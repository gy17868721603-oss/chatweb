import { useState } from 'react'
import { useChatStore } from '../../stores/chatStore'

interface ChatInputProps {
  onSend?: (message: string) => void
}

/**
 * 聊天输入组件。
 * 负责收集用户输入，并根据 Hermes 状态控制发送。
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
    <div>
      <input
        value={value}
        disabled={loading}
        placeholder={loading ? 'Hermes 正在思考...' : '输入消息...'}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
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
