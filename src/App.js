import './App.css';
import React from 'react';
import FirstItem from './components/FirstItem';
import SecondItem from './components/SecondItem';
import Result from './components/Result';
import getDiff from "./getDiff";

function App() {
  const [file1, setFile1] = React.useState();

  const [file2, setFile2] = React.useState();

  const [result, setResult] = React.useState();

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Title">Difference Generator for JSON and YML files</h2>
        <div className="row">
          <FirstItem file1={file1} setFile1={setFile1} className="code-area" />
          <SecondItem file2={file2} setFile2={setFile2} className="code-area" />
        </div>
        <button onClick={() => {
          const result = getDiff(file1, file2);
          console.log(result);
          setResult(result);
        }} className="button" role="button"><span>Generate Difference</span></button>
        <div className="row">
          <Result result={result} className="code-area" />
        </div>
      </header>
    </div>
  );
}

export default App;
