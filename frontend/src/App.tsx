import { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import configureStore from "./shared/data/store";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./shared/utils/globalStyles";
import Theme from "./shared/utils/theme";

import { getStylistList } from "./shared/data/actions/stylistActions";
import { getCategoryList } from "./shared/data/actions/categoryActions";
import { getSlideList } from "./shared/data/actions/slideActions";

import Header from "./shared/components/Navigation/Header";
import Footer from "./shared/components/Navigation/Footer";

import HomePage from "./home/pages/HomePage";
import RecrutationPage from "./user/pages/RecrutationPage";
import StylistsListPage from "./stylists/pages/StylistsListPage";
import StylistPage from "./stylists/pages/StylistPage";

import "./index.scss";

const store = configureStore();

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  }, [getCategoryList]);

  useEffect(() => {
    dispatch(getStylistList());
  }, [getStylistList]);

  useEffect(() => {
    dispatch(getSlideList());
  }, [getSlideList]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <section>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/stylistki' exact>
              <StylistsListPage />
            </Route>
            <Route path='/stylistki/:id' exact>
              <StylistPage />
            </Route>
            <Route path='/strefa-stylistki/rekrutacja' exact>
              <RecrutationPage />
            </Route>
          </Switch>
        </section>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
};

const RootApp: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default RootApp;
