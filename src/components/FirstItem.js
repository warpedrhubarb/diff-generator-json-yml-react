import CodeEditor from '@uiw/react-textarea-code-editor';

export default function FirstItem({ fileFormat1, file1, setFile1 }) {
  return (
    <CodeEditor
      value={file1}
      language={fileFormat1}
      placeholder="Please enter JSON or YAML data and choose format from the dropdown menu above."
      onChange={(evn) => setFile1(evn.target.value)}
      padding={15}
      style={{
        width: "90%",
        minHeight: "50vh",
        fontSize: "1rem",
        borderRadius: "1rem",
        margin: "1em",
        backgroundColor: "#262626",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  )
};
