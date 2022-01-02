import React from 'react';
import Header from "./components/Header";
import {GlobalStyle} from "./globalStyle";
import {RootContainer} from "./components/Background";
import Dishes from "./components/Dish";

function App() {
  return (
      <div className="App">
          <GlobalStyle />
          <RootContainer>
              <Header />
              <Dishes />
          </RootContainer>
      </div>
  );
}

export default App;
