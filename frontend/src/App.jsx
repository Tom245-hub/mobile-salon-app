import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import StoreProvider from "./shared/store/StoreProvider";

import GlobalStyle from "./shared/theme/globalStyles";
import Theme from "./shared/theme/theme";

import "./index.scss";

import HomePage from "./home/pages/HomePage";
import StylistsListPage from "./stylists/pages/StylistsListPage";
import StylistPage from "./stylists/pages/StylistPage";

import ServicesListPage from "./services/pages/ServicesListPage";
import ServicePage from "./services/pages/ServicePage";

import OrderForm from "./user/pages/OrderFormPage";
import JobForm from "./user/pages/JobForm";
import Account from "./user/pages/AccountPage";
import Header from "./shared/components/Navigation/Header";
import Footer from "./shared/components/Navigation/Footer";

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <HashRouter>
          <Header />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/stylistki' exact component={StylistsListPage} />
            <Route path='/stylistki/:id' component={StylistPage} />
            <Route path='/uslugi' exact component={ServicesListPage} />
            <Route path='/uslugi/:slug' exact component={ServicePage} />
            <Route path='/strefa-stylistki/rekrutacja' component={JobForm} />
            <Route path='/strefa-stylistki/konto' component={Account} />
            <Route path='/strefa-klientki/zamowienie' component={OrderForm} />
          </Switch>
          <Footer />
        </HashRouter>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
