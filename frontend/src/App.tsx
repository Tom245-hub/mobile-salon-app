import { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
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
import StylistsListPage from "./stylists/pages/StylistsListPage";
import StylistPage from "./stylists/pages/StylistPage";

import RecrutationPage from "./user/pages/RecrutationPage";
import DashboardPage from "./user/pages/DashboardPage";
import PersonalDataPage from "./user/pages/PersonalDataPage";

import { RootState } from "./shared/data/reducers/rootReducers";

import "./index.scss";
import Aside from "./shared/components/Navigation/Aside";

const store = configureStore();

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getCategoryList());
  }, [getCategoryList]);

  useEffect(() => {
    dispatch(getStylistList());
  }, [getStylistList]);

  useEffect(() => {
    dispatch(getSlideList());
  }, [getSlideList]);

  let content;

  if (user.isLogged && user.user.user.accessLevel === 1) {
    content = (
      <main>
        <Aside />
        <section>
          <Switch>
            <Route path='/panel' exact>
              <DashboardPage />
            </Route>
            <Route path='/panel/dane' exact>
              <PersonalDataPage />
            </Route>
            <Redirect to='/panel' />
          </Switch>
        </section>
      </main>
    );
  } else if (user.isLogged && user.user.user.accessLevel === 2) {
    content = (
      <main>
        <Aside />
        <section>
          <Switch>
            <Route path='/panel' exact>
              <DashboardPage />
            </Route>
            <Route path='/panel/dane' exact>
              <PersonalDataPage />
            </Route>
            <Redirect to='/panel' />
          </Switch>
        </section>
      </main>
    );
  } else {
    content = (
      <>
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
            <Redirect to='/' />
          </Switch>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        {content}
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
