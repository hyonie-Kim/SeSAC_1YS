import './App.css';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_TEST}
      <ListContainer />
    </div>
  );
}

export default App;
