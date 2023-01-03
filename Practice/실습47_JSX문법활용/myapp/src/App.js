import logo from './logo.svg';
import './App.css';

function App() {
  const fontStyle = {marginTop:"32px", backgroundColor:"skyblue"}
  const helloStr = "Hello, first exercise"
  return (
    <div className="App">
      <h1>실습, JSX문법 활용하기!</h1>
      <div style={fontStyle}>인라인 스타일</div>
      <div>{helloStr}</div>
      <div onClick={()=>{alert("클릭 됨")}}>클릭</div>
    </div>
  );
}

export default App;
