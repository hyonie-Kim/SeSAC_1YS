import React, { Component } from 'react';
import Test2 from './Test2';

export default class Test extends Component {
  render() {
    const name = '김세현';
    const my_style = {
      background: 'blue',
      color: 'orange',
      fontSize: '40px',
      padding: '12px',
    };
    return (
      <div>
        <div style={my_style}>{name}</div>
        <Test2 />
      </div>
    );
  }
}
