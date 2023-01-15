import React from 'react';

export default function Food(props) {
  const { food } = props;
  return (
    <div>
      안녕하세요, 제가 좋아하는 음식은{' '}
      <span style={{ color: 'red' }}>{food}</span>입니다.
    </div>
  );
}
Food.default = {
  food: '한국음식',
};
