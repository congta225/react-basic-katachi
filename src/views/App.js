import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';


function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with react
        </p>
        
        <MyComponent/>

      </header>
    </div>
  );
}

export default App;
