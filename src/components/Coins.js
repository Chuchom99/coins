import React from 'react'
import Coinitem from './Coinitem'
import Coin from "../routes/Coin";
import {Link} from "react-router-dom"

export const Coins = (props) => {
  return (
    <div className="container">
     <div>
     <div className="heading">
        <p>#</p>
        <p className="coin-name">Coins</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-in-mobile">Volume</p>
        <p className="hide-in-mobile">Mkt Cap</p>
     </div>
     {props.coins.map(coin => {
         return (
           <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}  >
             <Coinitem coins={coin} />
           </Link>
         )
     })}
     </div>
    </div>
  )
}

export default Coins