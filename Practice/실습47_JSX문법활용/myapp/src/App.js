import logo from './logo.svg';
import './App.css';

function App() {
  const inlineStyle = {marginTop:"32px", backgroundColor:"skyblue"}
  const helloStr = "Hello, first exercise"
  return (
    <div className="App">
      <h1>실습, JSX문법 활용하기!</h1>
      <div style={inlineStyle} onClick={()=>{alert("클릭 됨")}}>{helloStr}</div>
    </div>
  );
}

export default App;
