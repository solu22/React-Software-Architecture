import React from 'react';
import './App.css';
import Counter from './Counter';
import { CounterProvider } from './CounterContext';
import { RecoilRoot} from 'recoil';

import { Provider} from 'react-redux'

import { store } from './store';
import { CounterButton } from './mobX/CounterButton';
const counter = new CounterButton()

function App() {
  return (
    // <CounterProvider>
    //  <h1>State Management with Context</h1>
    //  <Counter />
    // </CounterProvider>
    // <RecoilRoot>
    // <h1>State managnment with Recoil</h1>
    // <Counter />
    // </RecoilRoot>

    // <Provider store={store}>
    // <h1>State Management with Redux</h1>
    // <Counter />
    // </Provider>

    <>
    <h1>State Management with MobX</h1>
    <Counter counter= {counter} />
    </>
  
  );
}

export default App;
