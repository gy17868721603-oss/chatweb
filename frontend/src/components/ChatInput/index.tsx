import { useState } from 'react'

interface ChatInputProps {
  onSend?: (message: string) => void
}

/**
 * 聊天输入组件。
 * 负责收集用户输入，并触发发送事件。
 */
export default function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = useState('')

  function submit() {
    const message = value.trim()
    if (!message) return

    onSend?.(message)
    setValue('')
  }

  return (
    <div>
      <input
        value={value}
        placeholder="输入消息..."
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            submit()
          }
        }}
      />
      <button onClick={submit}>发送</button>
    </div>
  )
}
