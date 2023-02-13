import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Button = styled.button`
  //투명도
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  margin: 0 1em;
  color: #b9eaff;
  padding: 0.25em 1em;
  // props로 전달 받았을때 props가 primary로 설정되어 있으면 아래 css 지정
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;
export default function StyledComponent() {
  return (
    <>
      <Container>
        <Button>Normal Button</Button>
        <Button primary>primary Button</Button>
      </Container>
    </>
  );
}
