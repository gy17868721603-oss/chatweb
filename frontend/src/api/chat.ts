const HERMES_API_URL = import.meta.env.VITE_HERMES_API_URL || 'http://192.168.1.219:8642/'

export interface ChatRequest {
  workspace_id: string
  agent: string
  message: string
}

export async function sendMessage(payload: ChatRequest) {
  return fetch(`${HERMES_API_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
}
