import React, { useState } from "react";
import "./App.css";
import Data from "./components/Data";
import Simulation from "./components/Simulation";

function App() {
  const [customerInterval, setCustomerInterval] = useState<number>(0);
  const [orderTaker, setOrderTaker] = useState<number>(0);
  const [orderTakerTime, setOrderTakerTime] = useState<number>(0);
  const [kitchen, setKitchen] = useState<number>(0);
  const [kitchenTime, setKitchenTime] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  const obj = {
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
    setStart
  };

  const obj1 = {
    customerInterval,
    orderTaker,
    orderTakerTime,
    kitchen,
    kitchenTime,
    start,
  };

  return (
    <div className="App">
      <Data {...obj} />
      <Simulation {...obj1} />
    </div>
  );
}

export default App;
