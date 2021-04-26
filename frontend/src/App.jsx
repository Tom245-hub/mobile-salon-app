import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import StoreProvider from "./store/StoreProvider";

import GlobalStyle from "./theme/globalStyles";
import Theme from "./theme/theme";

import "./index.scss";

import Layout from "./views/layout/Layout";
import HomeScreen from "./views/pages/home/HomeScreen";
import StylistList from "./views/pages/stylists/StylistList";
import StylistScreen from "./views/pages/stylists/StylistScreen";
import HairWeddingScreen from "./views/pages/services/HairWeddingScreen";
import MakeupWeddingScreen from "./views/pages/services/MakeupWeddingScreen";
import HairEventScreen from "./views/pages/services/HairEventScreen";
import MakeupEventScreen from "./views/pages/services/MakeupEventScreen";
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
              <Route path="/" exact component={HomeScreen} />

              <Route path="/stylistki" exact component={StylistList} />
              <Route path="/stylistki/:id" component={StylistScreen} />

              <Route
                path="/uslugi/fryzury-slubne"
                component={HairWeddingScreen}
              />
              <Route
                path="/uslugi/makijaze-slubne"
                component={MakeupWeddingScreen}
              />
              <Route
                path="/uslugi/fryzury-okazyjne"
                component={HairEventScreen}
              />
              <Route
                path="/uslugi/makijaze-okazyjne"
                component={MakeupEventScreen}
              />

              <Route path="/strefa-stylistki/rekrutacja" component={JobForm} />
              <Route path="/strefa-stylistki/konto" component={Account} />

              <Route path="/strefa-klientki/zamowienie" component={OrderForm} />

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
