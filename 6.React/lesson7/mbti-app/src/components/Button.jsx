import React from 'react';
import styled from 'styled-components';

const MyButton = styled.a`
  position: relative; // 본인 위치에서 문서흐름을 따름
  display: inline-block; // 한줄 다 차지 안함
  cursor: pointer;
  vertical-align: middle; // 수직정렬
  text-decoration: none;
  line-height: 1.6em; // 중앙정렬
  font-size: 1.2em;
  padding: 1.25em 2em;
  background-color: ${(props) => props.mainColor}; // props를 받아올수있음
  border: 2px solid ${(props) => props.subColor};
  border-radius: 0.75em;
  user-select: none; //드래그가 안되고 클릭만가능하게
  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;
  margin-top: 1em;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${(props) => props.subColor};
    border-radius: inherit;
    box-sizing: 0 0 0 2px ${(props) => props.subColor};
    transform: translate3d(0, 0.75em, -1em);
  }
  &:hover {
    background: ${(props) => props.hoverColor};
    transform: translateY(0.25em);
  }
`;

export default function Button({
  text,
  clickEvent,
  mainColor,
  subColor,
  hoverColor,
}) {
  return (
    <MyButton
      onClick={clickEvent}
      mainColor={mainColor}
      subColor={subColor}
      hoverColor={hoverColor}
    >
      {text}
    </MyButton>
  );
}
