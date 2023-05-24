import * as React from 'react';
import "./store/configureMobx";
import { AppStateContextProvider, AppState } from './store/AppState';
import { convertBinaryTreeToJSON } from './utils/binaryTreeParser';
import Header from './components/header/Header';
import Body from './components/body/Body';
import './App.scss';

const appState = new AppState();

//Testing Problem 1
const input = [1, [2], [3, null, [5]]]
const parsedJSON = convertBinaryTreeToJSON(input);
console.log(parsedJSON);

const App = () => {
  return (
    <AppStateContextProvider value={appState}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </AppStateContextProvider>
  );
}

export default App;