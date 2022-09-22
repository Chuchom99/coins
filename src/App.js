import React, {useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";
import Navbar from "./components/Navbar";
import axios from "./axios"

function App() {
  const [coins, setCoins] = useState([]);
  // const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  useEffect(() =>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false").then((res) => {
      setCoins(res.data)
      console.log(res.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
