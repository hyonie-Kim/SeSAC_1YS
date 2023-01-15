import React from 'react';
import Item from './Item';

export default function ItemList() {
  const items = [
    {
      item: '품목명: PS5',
      price: '가격: 685,000원',
    },
    {
      item: '품목명: 에어 프라이어',
      price: '가격: 50,000원',
    },
    {
      item: '품목명: 사세 치킨윙',
      price: '가격: 11,500원',
    },
  ];

  return (
    <div style={{ border: '1px solid black', margin: '50px 130px' }}>
      <h1>실습, 배열을 map으로 그리기</h1>
      {items.map((el, index) => {
        return <Item item={el.item} price={el.price} key={index} />;
      })}
      <hr />
      {items.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el.item}</h2>
            <p>{el.price}</p>
          </div>
        );
      })}
    </div>
  );
}
