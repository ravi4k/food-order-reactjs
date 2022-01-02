import React from 'react';
import Header from "./components/Header";
import {GlobalStyle} from "./globalStyle";
import {DualPanels, RootContainer} from "./components/Root";
import Dishes from "./components/Dish";
import Cart from "./components/Cart";

function App() {
  return (
      <div className="App">
          <GlobalStyle />
          <RootContainer>
              <Header />
              <DualPanels>
                  <Dishes />
                  <Cart />
              </DualPanels>
          </RootContainer>
      </div>
  );
}

export default App;
