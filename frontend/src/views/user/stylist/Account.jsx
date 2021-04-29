import React, { useContext } from "react";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../store/StoreProvider";

import Info from "./Info";
import Orders from "./Orders";
import PersonalData from "./PersonalData";

const Account = (props) => {
  const { loggedUser } = useContext(StoreContext);
  const history = useHistory();

  if (!loggedUser) {
    history.push("/");
  }

  // console.log(loggedUser);

  return (
    <Router>
      <div className='container-fluid min-vh-100'>
        <div className='row min-vh-100'>
          <div className='col-2 bg-light'>
            <nav>
              <ul>
                <li>Zalogowany: {loggedUser && loggedUser.user.login}</li>
                <li>
                  <Link to='/strefa-stylistki/konto'>Informacje</Link>
                </li>
                <li>
                  <Link to='/strefa-stylistki/konto/dane'>Twoje dane</Link>
                </li>
                <li>
                  <Link to='/strefa-stylistki/konto/zamowienia'>Zamówienia</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-10'>
            <Switch>
              <Route exact path='/strefa-stylistki/konto' component={Info} />
              <Route exact path='/strefa-stylistki/konto/dane' render={() => <PersonalData />} />
              <Route exact path='/strefa-stylistki/konto/zamowienia' render={() => <Orders />} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Account;
