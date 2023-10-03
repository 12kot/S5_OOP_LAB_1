import React, { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import {
  addCustomers,
  addDone,
  addOrders,
  removeCustomers,
  removeOrders,
} from "../store/appSlice";

type Props = {
  customerInterval: number;
  orderTaker: number;
  orderTakerTime: number;
  kitchen: number;
  kitchenTime: number;
  start: boolean;
};

const getCustomers = (customers: { id: number }[]) => {
  return customers.map((customer) => <p key={customer.id}>{customer.id}</p>);
};

const Simulation = ({
  customerInterval,
  orderTaker,
  orderTakerTime,
  kitchen,
  kitchenTime,
  start,
}: Props): ReactElement => {
  const { customers, orders, done } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  let i = 0;
  let j = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (start) {
        dispatch(addCustomers({ id: Math.floor(Math.random() * 10000 + 10) }));

        if (i < orderTaker) {
          console.log(i)
          i++;
          setTimeout(() => {
            dispatch(addOrders({ count: 1 }));
            dispatch(removeCustomers({ count: 1 }));
            i--;
            
            if (j < kitchen) {
              j++;
              setTimeout(() => {
                dispatch(addDone({ count: 1 }));
                dispatch(removeOrders({ count: 1 }));
                j--;
              }, kitchenTime * 1000);
            }
          }, orderTakerTime * 1000);
        }
      }
    }, customerInterval * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <div style={{ border: "1px solid red" }}>
        <p>Клиенты</p>
        {getCustomers(customers)}
      </div>
      <div style={{ border: "1px solid red" }}>
        <p>Заказ отдан кухне</p>
        {getCustomers(orders)}
      </div>
      <div style={{ border: "1px solid red" }}>
        <p>Заказ выдан клиенту</p>
        {getCustomers(done)}
      </div>
    </div>
  );
};

export default Simulation;
