import { create } from 'zustand'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatState {
  messages: ChatMessage[]
  workspaceId: string
  loading: boolean
  addMessage: (message: ChatMessage) => void
  appendAssistantMessage: (content: string) => void
  setLoading: (loading: boolean) => void
  clearMessages: () => void
}

/**
 * Hermes Chat 全局状态。
 * 保存当前 Workspace、消息列表以及 Agent 响应状态。
 */
export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  workspaceId: 'default',
  loading: false,

  addMessage(message) {
    set((state) => ({
      messages: [...state.messages, message],
    }))
  },

  appendAssistantMessage(content) {
    set((state) => {
      const messages = [...state.messages]
      const last = messages[messages.length - 1]

      if (last?.role === 'assistant') {
        last.content += content
      } else {
        messages.push({
          role: 'assistant',
          content,
        })
      }

      return { messages }
    })
  },

  setLoading(loading) {
    set({ loading })
  },

  clearMessages() {
    set({ messages: [] })
  },
}))
