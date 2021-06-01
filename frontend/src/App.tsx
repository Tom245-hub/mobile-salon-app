import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./shared/data/store";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./shared/utils/globalStyles";
import Theme from "./shared/utils/theme";

import "./index.scss";

import Header from "./shared/components/Navigation/Header";
import Footer from "./shared/components/Navigation/Footer";
import HomePage from "./home/pages/HomePage";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <HashRouter>
          <Header />
          <section>
            <main>
              <Switch>
                <Route path='/' exact>
                  <HomePage />
                </Route>
              </Switch>
            </main>
          </section>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
