import ChatWindow from './components/ChatWindow'
import ChatInput from './components/ChatInput'
import Sidebar from './components/Sidebar'
import { useChatStore } from './stores/chatStore'
import { streamMessage } from './api/chat'

export default function App() {
  const addMessage = useChatStore((state) => state.addMessage)
  const appendAssistantMessage = useChatStore((state) => state.appendAssistantMessage)
  const setLoading = useChatStore((state) => state.setLoading)
  const workspaceId = useChatStore((state) => state.workspaceId)

  async function handleSend(message: string) {
    if (!message.trim()) return

    addMessage({ role: 'user', content: message })
    setLoading(true)

    try {
      await streamMessage(
        {
          workspace_id: workspaceId,
          agent: 'hermes',
          message,
        },
        (token) => appendAssistantMessage(token),
      )
    } catch (error) {
      appendAssistantMessage(
        `Hermes 请求失败: ${error instanceof Error ? error.message : '未知错误'}`,
      )
    } finally {
      setLoading(false)
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
