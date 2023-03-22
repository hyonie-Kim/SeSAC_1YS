import Contact from './Contact';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default function App() {
  function reducer(state = [], action) {
    if (action.type == 'ADD') {
      return [...state, action.payload];

      //   var newState = Object.assign(state);
      //   newState.push(action.payload);
      //   return newState;
    }
    return state;
  }
  const store = createStore(reducer);
  const [list, setList] = useState([]);
  return (
    <>
      <Provider store={store}>
        현재 개수 : {list.length}
        <br />
        <Contact />
      </Provider>
    </>
  );
}
