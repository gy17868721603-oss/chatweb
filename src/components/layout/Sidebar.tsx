import { useChatStore } from '../../stores/chatStore'

export default function Sidebar() {
  const workspaceId = useChatStore((state) => state.workspaceId)

  return (
    <aside className="hidden h-screen w-72 shrink-0 flex-col border-r border-gray-200 bg-[#f7f7f8] p-4 dark:border-gray-800 dark:bg-[#171717] md:flex">
      <button className="mb-4 rounded-lg border border-gray-300 px-4 py-3 text-left text-sm transition hover:bg-white dark:border-gray-700 dark:hover:bg-[#2f2f2f]">
        + New Chat
      </button>

      <div className="flex-1 space-y-2 overflow-y-auto">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          History
        </div>
        <button className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-200 dark:hover:bg-[#2f2f2f]">
          New conversation
        </button>
      </div>

      <div className="rounded-lg bg-white p-3 text-xs text-gray-500 shadow-sm dark:bg-[#2f2f2f] dark:text-gray-300">
        <div>Workspace</div>
        <div className="mt-1 break-all text-gray-700 dark:text-gray-200">
          {workspaceId || 'default'}
        </div>
      </div>
    </aside>
  )
}
