import React, { ReactElement } from "react";

type Props = {
  customerInterval: number;
  setCustomerInterval: React.Dispatch<React.SetStateAction<number>>;
  orderTaker: number;
  setOrderTaker: React.Dispatch<React.SetStateAction<number>>;
  orderTakerTime: number;
  setOrderTakerTime: React.Dispatch<React.SetStateAction<number>>;
  kitchen: number;
  setKitchen: React.Dispatch<React.SetStateAction<number>>;
  kitchenTime: number;
  setKitchenTime: React.Dispatch<React.SetStateAction<number>>;
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Data = ({
  customerInterval,
  setCustomerInterval,
  orderTaker,
  setOrderTaker,
  orderTakerTime,
  setOrderTakerTime,
  kitchen,
  setKitchen,
  kitchenTime,
  setKitchenTime,
  start,
  setStart,
}: Props): ReactElement => {
  const handleClick = () => {
    setStart((e) => !e);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <label style={{ display: "flex" }}>
          Интвервал заказчика
          <input
            value={customerInterval}
            onChange={(e) => setCustomerInterval(+e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <label style={{ display: "flex" }}>
          Сколько принимателей
          <input
            value={orderTaker}
            onChange={(e) => setOrderTaker(+e.target.value)}
          ></input>
        </label>
        <label style={{ display: "flex" }}>
          Интвервал принимателя
          <input
            value={orderTakerTime}
            onChange={(e) => setOrderTakerTime(+e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <label style={{ display: "flex" }}>
          Сколько Кухни
          <input
            value={kitchen}
            onChange={(e) => setKitchen(+e.target.value)}
          ></input>
        </label>
        <label style={{ display: "flex" }}>
          Интвервал Кухни
          <input
            value={kitchenTime}
            onChange={(e) => setKitchenTime(+e.target.value)}
          ></input>
        </label>
      </div>

      <button onClick={handleClick}>{start ? "End": "Start"} simulation</button>
    </div>
  );
};

export default Data;
