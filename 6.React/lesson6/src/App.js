import './App.css';
import InlineCss from './components/InlineCss';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import UseEffectFetch from './components/UseEffectFetch';
import StyledApp from './components/StyledApp';
import Image from './components/Image';
import FancyBorder from './components/FancyBorder';
import Profile from './components/ReactRouter컴포넌트/Profile';
import Board from './components/ReactRouter컴포넌트/Board';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/ReactRouter컴포넌트/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
