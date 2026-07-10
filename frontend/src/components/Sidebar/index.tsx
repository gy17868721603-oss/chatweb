import AgentStatus from '../AgentStatus'
import { useChatStore } from '../../stores/chatStore'

/**
 * Hermes Chat 左侧导航。
 * 负责展示 Agent 状态、Workspace 信息以及会话操作入口。
 */
export default function Sidebar() {
  const clearMessages = useChatStore((state) => state.clearMessages)
  const workspaceId = useChatStore((state) => state.workspaceId)

  return (
    <aside className="sidebar">
      <AgentStatus />

      <section>
        <h3>Workspace</h3>
        <div>{workspaceId}</div>
      </section>

      <button onClick={clearMessages}>新建会话</button>
    </aside>
  )
}
