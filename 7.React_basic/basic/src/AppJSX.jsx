import "./App.css";

function AppJSX() {
  const name = "세현";
  const list = ["우유", "딸기", "바나나", "요거트", "키위"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h1>Hello</h1>
      <h2>{name}</h2>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default AppJSX;
