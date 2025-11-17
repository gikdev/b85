export const downloadContent = (content: string, filename?: string) => {
  if (!content) return

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
  const finalFilename = filename || `content-${timestamp}.md`

  const blob = new Blob([content], { type: "text/markdown" })
  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = url
  a.download = finalFilename

  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
