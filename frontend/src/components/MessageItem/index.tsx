interface MessageItemProps {
  role: 'user' | 'assistant'
  content: string
}

/**
 * 聊天消息展示组件
 *
 * 负责区分用户消息和 Hermes 回复内容。
 * 保留 Markdown 扩展入口，后续接入 markdown renderer。
 */
export default function MessageItem({ role, content }: MessageItemProps) {
  return (
    <div className={`message ${role}`}>
      <strong>{role === 'user' ? 'User' : 'Hermes'}</strong>
      <pre>{content}</pre>
    </div>
  )
}
