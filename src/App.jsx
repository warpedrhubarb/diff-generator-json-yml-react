import './App.css';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FirstItem from './components/FirstItem';
import SecondItem from './components/SecondItem';
import Result from './components/Result';
import getDiff from "./getDiff";

function App() {
  const [file1, setFile1] = React.useState({
    data: "",
    format: "JSON"
  });

  const [file2, setFile2] = React.useState({
    data: "",
    format: "JSON"
  });

  const [result, setResult] = React.useState();

  return (
    <div className="bg-dark py-4">
      <header className="pb-3 mb-4 border-bottom">
        <h2 className="m-2 text-center text-white">Difference Generator for JSON and YML files</h2>
      </header>
      <main className="container d-flex flex-column align-items-center">
        <section className="row col-12">
          <section className="col-lg-6">
            <DropdownButton
              className="ms-3"
              title={file1.format}
              variant="secondary"
              menuVariant="dark"
            >
              <Dropdown.Item onClick={() => setFile1({...file1, format: 'JSON'})}>JSON</Dropdown.Item>
              <Dropdown.Item onClick={() => setFile1({...file1, format: 'YAML'})}>YAML</Dropdown.Item>
            </DropdownButton>
            <FirstItem fileFormat1={file1.format} file1={file1} setFile1={setFile1} />
          </section>
          <section className="col-lg-6">
            <DropdownButton
              role="button"
              className="ms-3"
              title={file2.format}
              variant="secondary"
              menuVariant="dark"
            >
              <Dropdown.Item onClick={() => setFile2({...file2, format: 'JSON'})}>JSON</Dropdown.Item>
              <Dropdown.Item onClick={() => setFile2({...file2, format: 'YAML'})}>YAML</Dropdown.Item>
            </DropdownButton>
            <SecondItem fileFormat2={file2.format} file2={file2} setFile2={setFile2} />
          </section>
        </section>

        <a href="#result">
          <button
            className="button"
            onClick={() => setResult(getDiff(file1, file2))}>
            <span>Generate Difference</span>
          </button>
        </a>

        <section className="col-12 row" id="result">
          <Result result={result}/>
        </section>
      </main>
    </div>
  );
}

export default App;
