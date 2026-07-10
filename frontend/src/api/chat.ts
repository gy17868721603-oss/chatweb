export interface ChatRequest {
  workspace_id: string
  agent: string
  message: string
}

export async function sendMessage(payload: ChatRequest) {
  // 后续连接 Agent Gateway / Hermes Runtime
  return payload
}
