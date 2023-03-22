// 클래스형 컴포넌트로 변경
import React, {Component} from 'react';

// extends로 상속 받기
class MainHeader extends Component {
    render(){
        return (
            <h1>Hello, class component world!</h1>
        )
    }
}

export default MainHeader;


// 함수형 컴포넌트

// function MainHeader (){
//     return (
//         <h1>Hello, Component world!</h1>
//     )
// }

// export default MainHeader;



