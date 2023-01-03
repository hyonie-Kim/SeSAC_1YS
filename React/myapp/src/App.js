import logo from './logo.svg';
import './App.css';

function App() {
  // JavaScript 영역
  const str = "Hello, react world"

  function amazingJSX() {
    alert('AmazingJSX')
  }

  const test = "test"

  // 객체를 선언해서 스타일 전달
  const fontStyle = {backgroundColor:"orange"}

  function printConsole(){
    console.log("콘솔출력")
  }
  return (
    // JSX 영역(HTML) : JavaScript 사용시 중괄호, 카멜케이스 문법으로 작성
    <div className="App">
      <div style={fontStyle}>인라인 스타일</div>
      <h3>이벤트 핸들러 적용하기</h3>
      <span onClick={()=>{ alert("클릭!") }}>클릭</span> <br></br>
      <span onClick={()=>{
        let num =10;
        num +=5;
        console.log(num)
      }}>클릭2</span>
      <h3>함수 선언해서 전달하기</h3>
      <div onClick={printConsole()}>클릭</div>
      <sapn onClick= {()=>{
        let num =10;
        console.log(num)
      }}>클릭</sapn>
    </div>
  );
}

export default App;
