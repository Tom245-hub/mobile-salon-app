import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../shared/store/StoreProvider";
import request from "../../shared/utils/request";

import OrderBox from "../../shared/components/UIElements/OrderBox";
import PageTitle from "../../shared/components/UIElements/PageTitle";

const Orders = () => {
  const { user, userLogged, setUserLogged } = useContext(StoreContext);
  const orderList = userLogged.orders;
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  const handleAccept = async (id) => {
    const { data, status } = await request.put("/orders", { idOrder: id, statusOrder: "oczekujące" });
    if (status === 202) {
      setUserLogged((prev) => {
        return {
          ...prev,
          orders: data.orders,
        };
      });
    }
  };

  return (
    <div className='container-fluid my-5'>
      <PageTitle>Twoje zamówienia</PageTitle>

      {orderList.map((order) => (
        <OrderBox key={order._id} {...order} handleAccept={handleAccept} />
      ))}
    </div>
  );
};

export default Orders;
