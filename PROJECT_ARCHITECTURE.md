# Hermes Chat UI 项目架构设计

## 项目目标

创建 Hermes 的前端聊天页面，作为独立 Web UI，通过 API / WebSocket 对接 Hermes Runtime 或 Agent Gateway。

## 技术栈

- Vite
- React
- TypeScript
- TailwindCSS
- Zustand
- WebSocket 流式通信
- Markdown 渲染
- 代码高亮

## 项目结构

```text
hermes-chat-ui/
├── src/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── stores/
│   ├── types/
│   └── utils/
├── public/
├── package.json
└── README.md
```

## 核心功能

### Chat 页面

- 消息列表
- 用户消息
- Hermes 回复
- 流式输出
- Markdown 展示
- 代码块高亮

### Workspace

预留 Workspace 切换能力：

- workspace_id
- session 管理
- 后续支持多用户隔离

### Agent 接入

接口设计：

```json
{
  "workspace_id": "default",
  "agent": "hermes",
  "message": "你好"
}
```

## 后续扩展

- MCP Gateway 接入
- Skill Map 管理
- 多 Agent 切换
- 文件上传
- Agent 状态展示
