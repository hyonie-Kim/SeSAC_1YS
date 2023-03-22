import React, { Component } from 'react';

export default class ClassProps extends Component {
  render() {
    const { text, href, userID } = this.props;
    return (
      <div>
        <h1>{userID} 님 반갑습니다!</h1>
        <a href={href}>{text}</a>
      </div>
    );
  }
}
