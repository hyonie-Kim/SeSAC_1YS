import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'TTTtangsbudaejjigaeB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
body {
    font-family: 'TTTtangsbudaejjigaeB','Arial', sans-serif;
    padding-top: 1em;
    white-space: pre-wrap; 
}
ul, ol {
    list-style: none;
    padding-left: 0px; // 쓸데없는 공간 없기
}
`;

export default GlobalStyle;
