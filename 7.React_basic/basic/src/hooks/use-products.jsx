import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  // 커스텀 훅은 외부 사람들과 공유하고 싶은 데이터를 리턴하면됨
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);

  // 컴포넌트가 마운트 되었을때, 딱 한번만 네트워크 요청함
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끗한 데이터를 받아옴");
        setProducts(data);
      })
      .catch((e) => setError("에러가 발생했음"))
      .finally(() => setLoading(false));
    return () => {
      // unmount: 사라질때 호출됨.
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
    // 딱한번만 호출되어야 한다면 두번째 배열을 텅텅 비워두면 됨.
  }, [salesOnly]);

  return [loading, error, products];
}
