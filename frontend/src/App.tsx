import ChatWindow from './components/ChatWindow'
import ChatInput from './components/ChatInput'
import Sidebar from './components/Sidebar'
import { useChatStore } from './stores/chatStore'
import { sendMessage } from './api/chat'

/**
 * Hermes Chat 主入口。
 *
 * 负责：
 * 1. 接收用户输入
 * 2. 保存用户消息
 * 3. 调用 Hermes Runtime
 * 4. 保存助手回复
 */
export default function App() {
  const addMessage = useChatStore((state) => state.addMessage)

  async function handleSend(message: string) {
    if (!message.trim()) return

    addMessage({
      role: 'user',
      content: message,
    })

    try {
      const response = await sendMessage({
        workspace_id: 'default',
        agent: 'hermes',
        message,
      })

      const data = await response.json()

      addMessage({
        role: 'assistant',
        content:
          data.message || data.content || JSON.stringify(data),
      })
    } catch (error) {
      addMessage({
        role: 'assistant',
        content: `Hermes 请求失败: ${String(error)}`,
      })
    }
  }

  return (
    <div className="app">
      <Sidebar />
      <main>
        <ChatWindow />
        <ChatInput onSend={handleSend} />
      </main>
    </div>
  )
}
