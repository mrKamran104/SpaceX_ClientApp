import React, { useState } from "react";
import "./App.css";
import LaunchesInfoList from "./components/Launches";
import { Order } from "./generated/graphql";

function App() {
  const [limit, setLimit] = useState<number>(8);
  const [sort, setSort] = useState<string>("flight_number");
  const [order, setOrder] = useState<Order>(Order.Asc);

  return (
    <div className="App">
      <h1>Space X</h1>
      <div className="my-3">
        <input
          type="number"
          value={limit}
          min="5"
          className="mx-3"
          onChange={(e) => setLimit(parseInt(e.target.value))}
        />
        <select
          className="mx-3"
          defaultValue={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="flight_number">Flight Number</option>
          <option value="launch_year">Launch Year</option>
          <option value="mission_name">Mission Name</option>
        </select>
        <select
          defaultValue={order}
          className="mx-3"
          onChange={(e) =>
            setOrder(e.target.value === "asc" ? Order.Asc : Order.Desc)
          }
        >
          <option value={Order.Asc}>Ascending</option>
          <option value={Order.Desc}>Decending</option>
        </select>
      </div>

      <LaunchesInfoList limit={limit} sort={sort} order={order} />
    </div>
  );
}

export default App;
