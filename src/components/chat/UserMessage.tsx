interface UserMessageProps {
  content: string
}

export default function UserMessage({ content }: UserMessageProps) {
  return (
    <div className="flex justify-end px-4 py-3 animate-message-in">
      <div className="max-w-[80%] rounded-2xl bg-blue-600 px-4 py-3 text-white shadow-sm">
        {content}
      </div>
    </div>
  )
}
