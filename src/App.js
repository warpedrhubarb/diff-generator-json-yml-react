import './App.css';
import FirstItem from './components/FirstItem';
import SecondItem from './components/SecondItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Title">Difference Generator for JSON and YML files</h2>
        <div className="row">
          <FirstItem className="code-area" />
          <SecondItem className="code-area" />
        </div>
        <button className="button" role="button"><span>Generate Difference</span></button>
      </header>
    </div>
  );
}

export default App;
