import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface MessageItemProps {
  role: 'user' | 'assistant'
  content: string
}

/**
 * 星云智能体消息展示组件。
 * 支持 Markdown、GFM 表格和代码高亮。
 */
export default function MessageItem({ role, content }: MessageItemProps) {
  return (
    <div className={`message message-${role}`}>
      <div className="message-avatar">
        {role === 'user' ? '👤' : '✨'}
      </div>

      <div className="message-content">
        <strong>{role === 'user' ? '你' : '星云智能体'}</strong>

        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {content}
        </Markdown>
      </div>
    </div>
  )
}
