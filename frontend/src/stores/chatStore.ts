import { create } from 'zustand'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatState {
  messages: ChatMessage[]
  workspaceId: string
  addMessage: (message: ChatMessage) => void
  clearMessages: () => void
}

/**
 * Hermes Chat 全局状态。
 * 保存当前会话消息以及 Workspace 上下文。
 */
export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  workspaceId: 'default',

  addMessage(message) {
    set((state) => ({
      messages: [...state.messages, message],
    }))
  },

  clearMessages() {
    set({ messages: [] })
  },
}))
