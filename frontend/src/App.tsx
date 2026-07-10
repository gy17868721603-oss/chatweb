import ChatWindow from './components/ChatWindow'
import ChatInput from './components/ChatInput'
import Sidebar from './components/Sidebar'
import { useChatStore } from './stores/chatStore'
import { sendMessage } from './api/chat'

export default function App() {
  const addMessage = useChatStore((state) => state.addMessage)

  async function handleSend(message: string) {
    if (!message.trim()) return

    addMessage({
      role: 'user',
      content: message,
    })

    const response = await sendMessage({
      workspace_id: 'default',
      agent: 'hermes',
      message,
    })

    addMessage({
      role: 'assistant',
      content: JSON.stringify(response),
    })
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
