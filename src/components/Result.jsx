import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Result({ result, setResult }) {
  return (
    <CodeEditor
      value={result}
      language="json"
      placeholder="Result will be shown here."
      onChange={(e) => setResult(e.target.value)}
      padding={15}
      style={{
        overflow: "auto",
        width: "100%",
        height: "80vh",
        fontSize: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#262626",
        fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
      }}
    />
  );
}
