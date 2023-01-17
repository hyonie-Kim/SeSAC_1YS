import './App.css';
import InlineCss from './components/InlineCss';
import TestStyled from './components/TestStyled';
import UseEffectFetch from './components/UseEffectFetch';
import StyledApp from './components/StyledApp';
import Image from './components/Image';
import FancyBorder from './components/FancyBorder';
import Profile from './components/ReactRouter컴포넌트/Profile';
import Board from './components/ReactRouter컴포넌트/Board';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/ReactRouter컴포넌트/Header';
import NotFound from './components/ReactRouter컴포넌트/NotFound';
import BoardDetail from './components/ReactRouter컴포넌트/BoardDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
