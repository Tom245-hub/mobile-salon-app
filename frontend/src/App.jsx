import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import StoreProvider from "./store/StoreProvider";

import GlobalStyle from "./theme/globalStyles";
import Theme from "./theme/theme";

import "./index.scss";

import Layout from "./views/layout/Layout";
import HomePage from "./views/pages/home/HomePage";
import StylistList from "./views/pages/stylists/StylistList";
import StylistPage from "./views/pages/stylists/StylistPage/StylistPage";

import ServicesListPage from "./views/pages/services/ServicesListPage/ServicesListPage";
import ServicePage from "./views/pages/services/ServicePage/ServicePage";

import OrderForm from "./views/user/client/OrderForm";
import JobForm from "./views/user/stylist/JobForm";
import Account from "./views/user/stylist/Account";
import Orders from "./views/user/stylist/Orders";

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <HashRouter>
          <Layout>
            <Switch>
              <Route path='/' exact component={HomePage} />

              <Route path='/stylistki' exact component={StylistList} />
              <Route path='/stylistki/:id' component={StylistPage} />

              <Route path='/uslugi' exact component={ServicesListPage} />
              <Route path='/uslugi/:id' exact component={ServicePage} />

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
