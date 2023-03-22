// 함수형 컴포넌트
// 클릭이 되면 버튼의 문구가 변경
function HelloWorldButton() {
  const [isClick, setClickState] = React.useState(false);
  const text = isClick ? "It's clicked" : "Hello, React world";

  console.log(isClick);

  return React.createElement(
    "button",
    { onClick: () => setClickState(!isClick) },
    // text
    React.createElement("div", null, React.createElement("span", null, text))
  );
}

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorldButton));
