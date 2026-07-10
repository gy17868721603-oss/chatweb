interface ChatInputProps {
  onSend?: (message: string) => void
}

export default function ChatInput({ onSend }: ChatInputProps) {
  return (
    <input
      placeholder="输入消息..."
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onSend?.(event.currentTarget.value)
          event.currentTarget.value = ''
        }
      }}
    />
  )
}
