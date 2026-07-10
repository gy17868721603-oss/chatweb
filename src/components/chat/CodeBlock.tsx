interface CodeBlockProps {
  language?: string
  code: string
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  async function copyCode() {
    await navigator.clipboard.writeText(code)
  }

  return (
    <div className="overflow-hidden rounded-lg bg-black/90 text-sm">
      <div className="flex justify-between px-3 py-2 text-xs text-gray-300">
        <span>{language || 'code'}</span>
        <button onClick={copyCode}>Copy</button>
      </div>
      <pre className="overflow-x-auto p-4 text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}
