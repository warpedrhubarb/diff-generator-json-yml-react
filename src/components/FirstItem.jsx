import CodeEditor from '@uiw/react-textarea-code-editor';

export default function FirstItem({ file1, setFile1 }) {
  return (
    <CodeEditor
      value={file1.data}
      language={file1.format}
      placeholder="Paste JSON or YAML data and choose format from the dropdown menu above."
      onChange={(e) => setFile1((prev) => ({...prev, data: e.target.value}))}
      padding={15}
      style={{
        overflow: "auto",
        minHeight: "50vh",
        fontSize: "1rem",
        borderRadius: "1rem",
        margin: "1rem",
        backgroundColor: "#262626",
        fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
      }}
    />
  )
};
