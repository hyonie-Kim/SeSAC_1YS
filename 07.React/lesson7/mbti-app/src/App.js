import styled from 'styled-components';
import { useSelector } from 'react-redux';
import GlobalStyle from './components/GlobalStyle';
import Mbti from './components/Mbti';
import Start from './components/Start';
import Show from './components/Show';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px; // 상하 35px
  margin: auto;
  text-align: center;
`;
function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);
  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

export default App;
