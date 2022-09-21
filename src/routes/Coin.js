import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';
import DOMPurify from 'dompurify';

const Coin = () => {

  const params = useParams();
  const [info, setInfo] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setInfo(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div>
     <div className="coin-container">
      <div className="content">
        <h1>{info.name}</h1>
      </div>
      <div className="content">
      <div className="rank">
        <span className="rank-btn">Rank #{info.market_cap_rank}</span>
      </div>
        <div className="imfo">
          <div className="coin-heading">
           {info.image ? <img src={info.image.small} alt=""/> : null}
           <p>{info.name}</p>
           <p>{info.symbol}</p>
          </div>
           <div className="coin-price">
            {info.market_data?.current_price ?  <h1>{info.market_data.current_price.usd}</h1>: null}
           </div>
        </div>
      </div>
        <div className="content">
          <table>
            <thead>
              <tr> 
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                 <td>{info.market_data?.price_change_percentage_1h_in_currency ? <p>{info.market_data.price_change_percentage_1h_in_currency.usd}</p> : null}</td>
                 <td>{info.market_data?.price_change_percentage_24h_in_currency ? <p>{info.market_data.price_change_percentage_24h_in_currency.usd}</p> : null}</td>
                 <td>{info.market_data?.price_change_percentage_7d_in_currency ? <p>{info.market_data.price_change_percentage_7d_in_currency.usd}</p> : null}</td>
                 <td>{info.market_data?.price_change_percentage_14d_in_currency ? <p>{info.market_data.price_change_percentage_14d_in_currency.usd}</p> : null}</td>
                 <td>{info.market_data?.price_change_percentage_30d_in_currency ? <p>{info.market_data.price_change_percentage_30d_in_currency.usd}</p> : null}</td>
                 <td>{info.market_data?.price_change_percentage_1yr_in_currency ? <p>{info.market_data.price_change_percentage_1yr_in_currency.usd}</p> : null}</td>
                 
              </tr>
            </tbody>
          </table>
        </div>
          <div className="content">
            <div className="stat">
              <div className="left">
                <div className="row">
                 <h4>24 Hour High</h4>
                 {Coin.market_data_24h ? <p>{info.market_data_24h.usd}</p> : null}
                </div>

              </div>

              <div className="right">
                <div className="row">
                <h4>24 Hour High</h4>
                 {Coin.market_data_24h ? <p>{info.market_data_24h.usd}</p> : null}
                </div>

              </div>

            </div>
          </div>
          <div className="content">
            <div className="about">
              <h3>About</h3>
              <p dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(info.description ? info.description.en : ''),
              }}>
              </p>
            </div>
          </div>
     </div>  
    </div>
  )
}

export default Coin