import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../store/StoreProvider";

import OrderBox from "../../components/OrderBox";

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
      <h2 className='text-center mb-3'>Twoje zamówienia</h2>
      {orders.map((order) => (
        <OrderBox key={order.idOrder} {...order} />
      ))}
    </div>
  );
};

export default Orders;
