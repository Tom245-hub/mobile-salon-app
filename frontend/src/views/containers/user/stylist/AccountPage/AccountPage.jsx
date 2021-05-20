import React, { useEffect, useContext, useState } from "react";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../../../store/StoreProvider";
import request from "../../../../../utils/request";

import Info from "../InfoPage/InfoPage";
import Orders from "../OrdersPage/OrdersPage";
import PersonalData from "../PersonalDataPage/PersonalDataPage";
import ProfileData from "../ProfileDataPage/ProfileDataPage";

const Account = (props) => {
  const { user, setUser, setUserLogged } = useContext(StoreContext);
  const history = useHistory();

  const fetchDataStylist = async () => {
    try {
      const { data } = await request.get(`/stylists/${user.user_id}`);
      setUserLogged(data);
    } catch (error) {
      console.log(error);
      history.push("/");
    }
  };

  useEffect(() => {
    if (user.accessLevel === 0) {
      fetchDataStylist();
    }
  }, [user]);

  if (!user) {
    history.push("/");
  }

  const handleClickLogOut = () => {
    setUser(null);
    setUserLogged(null);
    history.push("/");
  };

  return (
    <div className='container-fluid min-vh-100'>
      <div className='row min-vh-100'>
        <div className='col-2 bg-light p-0'>
          <nav>
            <ul>
              <li className='text-center bg-primary text-white mb-2 py-3'>
                Zalogowany: {user && user.login} <a onClick={handleClickLogOut}>(wyloguj)</a>
              </li>
              {user.accessLevel === 0 && (
                <>
                  <li className='text-center mb-2'>
                    <Link to='/strefa-stylistki/konto'>Informacje</Link>
                  </li>
                  <li className='text-center mb-2'>
                    <Link to='/strefa-stylistki/konto/profil'>Twój profil</Link>
                  </li>
                  <li className='text-center mb-2'>
                    <Link to='/strefa-stylistki/konto/dane'>Twoje dane</Link>
                  </li>
                  <li className='text-center mb-2'>
                    <Link to='/strefa-stylistki/konto/zamowienia'>Zamówienia</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
        <div className='col-10'>
          <Router>
            {user && (
              <Switch>
                <Route exact path='/strefa-stylistki/konto' component={Info} />
                <Route exact path='/strefa-stylistki/konto/dane' render={() => <PersonalData />} />
                <Route exact path='/strefa-stylistki/konto/profil' render={() => <ProfileData />} />
                <Route exact path='/strefa-stylistki/konto/zamowienia' render={() => <Orders />} />
              </Switch>
            )}
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Account;
