import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function FirstItem() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
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
  );
}
