import React, { useEffect, useState } from "react";

export default function Products() {
  //   const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끗한 데이터를 받아옴");
        setProducts(data);
      });
    return () => {
      // unmount: 사라질때 호출됨.
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
    // 딱한번만 호출되어야 한다면 두번째 배열을 텅텅 비워두면 됨.
  }, [checked]);

  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button> */}
    </>
  );
}
