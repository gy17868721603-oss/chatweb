import ChatWindow from './components/ChatWindow'
import ChatInput from './components/ChatInput'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <ChatWindow />
        <ChatInput />
      </main>
    </div>
  )
}
