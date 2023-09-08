import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Fetch from'./components/Fetch'
import Nav from './components/Nav'
import Page from './components/Page'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Fetch/>
      <Page/>
    </div>
  );
}

export default App;

