import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import BalInput from './components/BalInput';
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="App">
      <Title/>
      <BalInput/>
      <Transactions/>
    </div>
  );
}

export default App;
