import React, { Component } from 'react';
import TextProps from './TextProps';

export default class PropsEx3 extends Component {
  render() {
    return (
      <div>
        <TextProps
          text="App 컴포넌트에서 넘겨준 text props입니다."
          valid="콘솔 띄우기 성공!"
        />
      </div>
    );
  }
}
