import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../../../../store/StoreProvider";
import request from "../../../../../utils/request";

import OrderBox from "../../../../components/OrderBox";
import PageTitle from "../../../../components/fonts/PageTitle";

const Orders = () => {
  const { user, userLogged, setUserLogged } = useContext(StoreContext);
  const orders = userLogged.orders;
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  const handleAccept = async (id) => {
    const { data, status } = await request.put("/orders", { idOrder: id, statusOrder: "oczekujące" });
    if (status === 202) {
      // console.log(userLogged);
      setUserLogged((prev) => {
        return {
          ...prev,
          orders: data.orders,
        };
      });
    }
  };

  // console.log(userLogged);

  // console.log(orders);
  return (
    <div className='container-fluid my-5'>
      <PageTitle>Twoje zamówienia</PageTitle>

      {orders.map((order, index) => (
        <OrderBox key={index} {...order} handleAccept={handleAccept} />
      ))}
    </div>
  );
};

export default Orders;
