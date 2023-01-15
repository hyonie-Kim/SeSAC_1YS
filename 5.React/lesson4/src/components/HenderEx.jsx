import React, { Component } from 'react';

export default class HenderEx extends Component {
  state = {
    text: 'Hello World!',
  };
  hadleClick() {
    this.setState((prevState) => ({
      text: !prevState.text,
    }));
  }
  render() {
    // const { text } = this.state;
    return (
      <div>
        <h1>{this.state.text ? 'Hello World!' : 'Goodbye World!'}</h1>
        <button
          onClick={() => {
            // this.setState({ text: 'Goodbye World!' });
            this.hadleClick();
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}
