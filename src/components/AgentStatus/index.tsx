/**
 * 星云智能体状态展示组件。
 * 后续可连接 Runtime Health API。
 */
export default function AgentStatus() {
  return (
    <div className="agent-status">
      <h2>星云智能体</h2>
      <div>🟢 在线</div>
      <div>智能体: 星云</div>
      <div>运行服务: 192.168.1.219:8642</div>
    </div>
  )
}
