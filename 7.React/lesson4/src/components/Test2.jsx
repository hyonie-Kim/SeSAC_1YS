import React, { Component } from 'react';
import kakao2 from '../kakao2.png';

export default class Test2 extends Component {
  render() {
    const style = {
      color: 'orange',
      fontSize: '40px',
      marginTop: '20px',
    };
    return (
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={kakao2} />
      </div>
    );
  }
}
