import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function SecondItem({ fileFormat2, file2, setFile2 }) {
  return (
    <CodeEditor
      value={file2}
      language={fileFormat2}
      placeholder="Please enter JSON or YAML data and choose format from the dropdown menu above."
      onChange={(evn) => setFile2(evn.target.value)}
      padding={15}
      style={{
        height: "50vh",
        width: "100%",
        fontSize: "1rem",
        borderRadius: "1rem",
        margin: "1em",
        backgroundColor: "#262626",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}
