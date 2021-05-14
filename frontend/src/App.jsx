import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import StoreProvider from "./store/StoreProvider";

import GlobalStyle from "./theme/globalStyles";
import Theme from "./theme/theme";

import "./index.scss";

import Layout from "./views/layout/Layout";
import HomePage from "./views/pages/home/HomePage";
import StylistsListPage from "./views/pages/stylists/StylistsListPage/StylistsListPage";
import StylistPage from "./views/pages/stylists/StylistPage/StylistPage";

import ServicesListPage from "./views/pages/services/ServicesListPage/ServicesListPage";
import ServicePage from "./views/pages/services/ServicePage/ServicePage";

import OrderForm from "./views/user/client/OrderForm/OrderForm";

import JobForm from "./views/user/stylist/JobForm/JobForm";
import Account from "./views/user/stylist/Account/Account";
import Orders from "./views/user/stylist/Account/sections/Orders";

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <HashRouter>
          <Layout>
            <Switch>
              <Route path='/' exact component={HomePage} />

              <Route path='/stylistki' exact component={StylistsListPage} />
              <Route path='/stylistki/:id' component={StylistPage} />

              <Route path='/uslugi' exact component={ServicesListPage} />
              <Route path='/uslugi/:slug' exact component={ServicePage} />

              <Route path='/strefa-stylistki/rekrutacja' component={JobForm} />
              <Route path='/strefa-stylistki/konto' component={Account} />

              <Route path='/strefa-klientki/zamowienie' component={OrderForm} />

              {/* <Route path="/stylistki/:idStylist(\d+)-:name" component={StylistScreen} />
              <Route path="/zamowienie" exact component={OrderScreen} /> */}
            </Switch>
          </Layout>
        </HashRouter>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
