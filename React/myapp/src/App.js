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

  return (
    // JSX 영역(HTML) : JavaScript 사용시 중괄호, 카멜케이스 문법으로 작성
    <div className="App">
      <div style={fontStyle}>인라인 스타일</div>
    </div>
  );
}

export default App;
