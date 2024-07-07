import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ChildComponent from './Example/ChildComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Hello World with ReactJs
        </p>
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
