import React, { useContext } from "react";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../store/StoreProvider";

import Info from "./Info";
import Orders from "./Orders";
import PersonalData from "./PersonalData";

const Account = (props) => {
  const { loggedUser, setLoggedUser } = useContext(StoreContext);
  const history = useHistory();

  if (!loggedUser) {
    history.push("/");
  }

  // console.log(loggedUser);

  const handleClickLogOut = () => {
    setLoggedUser(false);
    history.push("/");
  };

  return (
    <Router>
      <div className='container-fluid min-vh-100'>
        <div className='row min-vh-100'>
          <div className='col-2 bg-light p-0'>
            <nav>
              <ul>
                <li className='text-center bg-primary text-white mb-2 py-3'>
                  Zalogowany: {loggedUser && loggedUser.user.login} <a onClick={handleClickLogOut}>(wyloguj)</a>
                </li>
                <li className='text-center mb-2'>
                  <Link to='/strefa-stylistki/konto'>Informacje</Link>
                </li>
                <li className='text-center mb-2'>
                  <Link to='/strefa-stylistki/konto/dane'>Twoje dane</Link>
                </li>
                <li className='text-center mb-2'>
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
