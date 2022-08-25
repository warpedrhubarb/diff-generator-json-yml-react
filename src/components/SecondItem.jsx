import CodeEditor from '@uiw/react-textarea-code-editor';

export default function SecondItem({ file2, setFile2 }) {
  return (
    <CodeEditor
      value={file2.data}
      language={file2.format}
      placeholder="Paste JSON or YAML data and choose format from the dropdown menu above."
      onChange={(e) => setFile2((prev) => ({...prev, data: e.target.value}))}
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
  );
}
