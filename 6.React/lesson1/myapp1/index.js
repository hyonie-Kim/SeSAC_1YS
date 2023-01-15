// 함수형 컴포넌트

function HelloWorldButton() {
  const [isClick, setClickState] = React.useState(false);
  const text = isClick ? "It's clicked" : "Hello, React world";

  return (
    // JSX(JavaScript XML)문법 - 이를 읽기 위해서는 Babel 컴파일러(번역기)가 필요!
    <button onClick={() => { setClickState(!isClick);}}>
      <div>
        <span>{text}</span>
      </div>
    </button>

    // "button",
    // { onClick: () => setClickState(!isClick) },
    // React.createElement("div", null, React.createElement("span", null, text))
  );
}

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(<HelloWorldButton />);
