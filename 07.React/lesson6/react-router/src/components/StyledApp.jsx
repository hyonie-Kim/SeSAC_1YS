import logo from '../logo.svg';
import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const RootDiv = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const AppImg = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotation} infinite 20s linear;
`;

const MyA = styled.a`
  color: #61dafb;
`;

function StyledApp() {
  return (
    <RootDiv>
      <AppHeader>
        <AppImg src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}

export default StyledApp;
