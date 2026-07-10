/**
 * Hermes Agent 状态展示组件。
 * 后续可连接 Runtime Health API。
 */
export default function AgentStatus() {
  return (
    <div className="agent-status">
      <h3>Hermes</h3>
      <div>🟢 Online</div>
      <div>Agent: hermes</div>
      <div>Runtime: 192.168.1.219:8642</div>
    </div>
  )
}
