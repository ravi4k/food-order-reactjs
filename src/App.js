import React from 'react';
import Header from "./components/Header";
import {GlobalStyle} from "./globalStyle";
import {RootContainer} from "./components/Background";

function App() {
  return (
      <div className="App">
          <GlobalStyle />
          <RootContainer>
              <Header />
          </RootContainer>
      </div>
  );
}

export default App;
