import './App.css';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FirstItem from './components/FirstItem';
import SecondItem from './components/SecondItem';
import Result from './components/Result';
import getDiff from "./getDiff";

function App() {
  const [file1, setFile1] = React.useState();

  const [file2, setFile2] = React.useState();

  const [result, setResult] = React.useState();

  const [fileFormat1, setFileFormat1] = React.useState('JSON' );

  const [fileFormat2, setFileFormat2] = React.useState('JSON' );

  return (
    <div className="bg-dark py-4">
      <header className="pb-3 mb-4 border-bottom">
        <h2 className="m-2 text-center text-white">Difference Generator for JSON and YML files</h2>
      </header>
      <main className="container d-flex flex-column align-items-center">
        <section className="row col-12">
          <section className="col-lg-6">
            <DropdownButton
              role="button"
              className="ms-3"
              title={fileFormat1}
              variant="secondary"
              menuVariant="dark"
              onSelect={(event, e) => setFileFormat1(e.target.value)}
            >
              <Dropdown.Item as="option" value='JSON'>JSON</Dropdown.Item>
              <Dropdown.Item as="option" value='YAML'>YAML</Dropdown.Item>
            </DropdownButton>
            <FirstItem fileFormat1={fileFormat1} file1={file1} setFile1={setFile1} />
          </section>
          <section className="col-lg-6">
            <DropdownButton
              role="button"
              className="ms-3"
              title={fileFormat2}
              variant="secondary"
              menuVariant="dark"
              onSelect={(event, e) => setFileFormat2(e.target.value)}
            >
              <Dropdown.Item as="option" value='JSON'>JSON</Dropdown.Item>
              <Dropdown.Item as="option" value='YAML'>YAML</Dropdown.Item>
            </DropdownButton>
            <SecondItem fileFormat2={fileFormat2} file2={file2} setFile2={setFile2} />
          </section>
        </section>

        <a href="#result">
          <button
            href="#result"
            className="button"
            onClick={() => setResult(getDiff(file1, file2, fileFormat1, fileFormat2))}>
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
