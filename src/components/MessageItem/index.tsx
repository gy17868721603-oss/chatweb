import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface MessageItemProps {
  role: 'user' | 'assistant'
  content: string
}

/**
 * Hermes 聊天消息展示组件。
 *
 * 支持：
 * - User / Hermes 区分
 * - Markdown 渲染
 * - GFM 表格
 * - 代码高亮
 */
export default function MessageItem({ role, content }: MessageItemProps) {
  return (
    <div className={`message ${role}`}>
      <strong>{role === 'user' ? 'User' : 'Hermes'}</strong>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </Markdown>
    </div>
  )
}
