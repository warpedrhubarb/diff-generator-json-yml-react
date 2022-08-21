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

  const [fileFormat1, setFileFormat1] = React.useState({ format: 'JSON' });

  const [fileFormat2, setFileFormat2] = React.useState({ format: 'JSON' });

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Title">Difference Generator for JSON and YML files</h2>
        <div className="row">
          <div className="firstSection">
            <div className="buttonsRow">
              <button onClick={() => setFileFormat1('JSON')}>JSON</button>
              <button onClick={() => setFileFormat1('YAML')}>YAML</button>
            </div>
            <FirstItem fileFormat1={fileFormat1} file1={file1} setFile1={setFile1} className="code-area" />
          </div>
          <div className="secondSection">
            <div className="buttonsRow">
              <button onClick={() => setFileFormat2('JSON')}>JSON</button>
              <button onClick={() => setFileFormat2('YAML')}>YAML</button>
            </div>
            <SecondItem fileFormat2={fileFormat2} file2={file2} setFile2={setFile2} className="code-area" />
          </div>
        </div>
        <button onClick={() => {
          const result = getDiff(file1, file2, fileFormat1, fileFormat2);
          setResult(result);
        }} className="button" role="button"><span>Generate Difference</span></button>
        <div className="row">
          <div className="result">
            <Result result={result} className="code-area" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
