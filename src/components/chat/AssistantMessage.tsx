import MarkdownRenderer from './MarkdownRenderer'

interface AssistantMessageProps {
  content: string
}

export default function AssistantMessage({ content }: AssistantMessageProps) {
  return (
    <div className="flex px-4 py-3 animate-message-in">
      <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-3 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  )
}
