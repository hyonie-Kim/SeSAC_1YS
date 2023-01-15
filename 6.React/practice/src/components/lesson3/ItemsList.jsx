import React from 'react';
import Items from './Items';

export default function ItemsList() {
  const items = [
    {
      item: 'PS5',
      price: '685,000원',
    },
    {
      item: '에어 프라이어',
      price: '50,000원',
    },
    {
      item: '사세 치킨윙',
      price: '11,500원',
    },
  ];
  return (
    <div>
      <h1>실습, 배열을 map으로 그리기</h1>
      <h2>1.컴포넌트와 Props사용</h2>
      {items.map((el, index) => {
        return <Items item={el.item} price={el.price} key={index} />;
      })}
      <hr />
      <h2>2.HTML 코드를 리턴</h2>
      {items.map((el, index) => {
        return (
          <div key={index}>
            <h3>{el.item}</h3>
            <p>{el.price}</p>
          </div>
        );
      })}
    </div>
  );
}
