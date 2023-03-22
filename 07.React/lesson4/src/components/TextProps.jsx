import React, { Component } from 'react';
import PropsTypes from 'prop-types';

export default class TextProps extends Component {
  render() {
    const { text, valid, textDefault } = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <h1>{textDefault}</h1>
        <button onClick={() => console.log(valid)}>콘솔 메세지</button>
      </div>
    );
  }
}

TextProps.defaultProps = {
  text: '이건 기본 text props입니다.',
  textDefault: '이건 기본 text props입니다.',
};
TextProps.PropsTypes = {
  text: PropsTypes.string.isRequired,
};
