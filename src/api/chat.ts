const HERMES_API_URL = import.meta.env.VITE_HERMES_API_URL || 'http://192.168.1.219:8642'

export interface ChatRequest {
  workspace_id: string
  agent: string
  message: string
}

/**
 * 发送普通聊天请求。
 * 后续根据 Hermes Runtime 返回协议扩展 response 解析。
 */
export async function sendMessage(payload: ChatRequest) {
  const response = await fetch(`${HERMES_API_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.json()
}

/**
 * Hermes 流式输出接口。
 * 使用 SSE 方式逐 token 接收 Agent 回复。
 */
export async function streamMessage(
  payload: ChatRequest,
  onToken: (token: string) => void,
) {
  const response = await fetch(`${HERMES_API_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.body) {
    return
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()

  while (true) {
    const { done, value } = await reader.read()

    if (done) {
      break
    }

    const chunk = decoder.decode(value)
    onToken(chunk)
  }
}
