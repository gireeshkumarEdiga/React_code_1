import logo from './logo.svg';
import './App.css';
import Props from './Components/Props';

function App() {

  const user = {
    firstName : "Girish",
    lastName : "Kumar"
  }

  return (
    <div className="App">
    <Props />
    </div>
  );
}

export default App;
