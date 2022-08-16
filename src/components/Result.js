import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Result({ result, setResult }) {
  return (
    <CodeEditor
      value={result}
      language="json"
      placeholder="Result will be shown here."
      onChange={(evn) => setResult(evn.target.value)}
      padding={15}
      style={{
        overflow: "auto",
        width: "100%",
        minHeight: "50vh",
        fontSize: "1rem",
        borderRadius: "1rem",
        margin: "1em",
        backgroundColor: "#262626",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}
