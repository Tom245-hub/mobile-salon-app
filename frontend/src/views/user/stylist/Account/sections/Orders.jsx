import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../../../store/StoreProvider";

import OrderBox from "../../../../components/OrderBox";
import PageTitle from "../../../../components/fonts/PageTitle";

const Orders = (props) => {
  const { loggedUser } = useContext(StoreContext);
  const orders = loggedUser.orders;
  const history = useHistory();

  if (!loggedUser) {
    history.push("/");
  }

  // console.log(orders);
  return (
    <div className='container-fluid my-5'>
      <PageTitle>Twoje zamówienia</PageTitle>
      {orders.map((order) => (
        <OrderBox key={order.idOrder} {...order} />
      ))}
    </div>
  );
};

export default Orders;
