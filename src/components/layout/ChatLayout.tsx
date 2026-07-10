import type { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

interface ChatLayoutProps {
  children: ReactNode
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-white text-gray-900 dark:bg-[#212121] dark:text-gray-100">
      <Sidebar />
      <main className="flex min-w-0 flex-1 flex-col">
        <Header />
        <div className="flex-1 overflow-hidden">{children}</div>
      </main>
    </div>
  )
}
