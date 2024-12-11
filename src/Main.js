import React, {useState} from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Chart from "./Chart";
import OrderTable from "./OrderTable";
import DataTable from "./DataTable";
import CoinTransfer from "./CoinTransfer";

function Main(){
    const [showSideNav, setShowSideNav] = useState(false);

  const handleNav = () => {
    setShowSideNav((prevState) => !prevState); 
  };
    return(
        <>
        <Sidenav showSideNav={showSideNav} handleNav={handleNav}/>
        <Topnav handleNav={handleNav} showSideNav={showSideNav} />
        <section className={`main-page ${showSideNav ? "shifted" : ""}`}>
        <div className="coins-section">
            <div className="overview">
                <h1>Over View</h1>
            </div>
            <div className="coins">
                <img src="./bitcoin.svg" alt="bitcoin" />
                <p>Bitcoin</p>
                <p>$8,456.87</p>
                <span>- 1.81%<img src="./trending-down.svg" alt="loss" /></span>
            </div>
            <div className="coins">
               <img src="./etherum.svg" alt="bitcoin" />
               <p>Etherum</p>
               <p>$828.81</p>
               <span>-0.65%<img src="./trending-down.svg" alt="loss" /></span>
            </div>
            <div className="coins">
               <img src="./ripple.svg" alt="bitcoin" />
               <p>Ripple</p>
               <p>$0.802</p>
               <span className="green">5.72%<img src="./trending-up.svg" alt="gain" /></span>
            </div>
            <div className="coins">
              <img src="./nem.svg" alt="bitcoin" />
              <p>NEM</p>
              <p>$0.544</p>
              <span>-5.53%<img src="./trending-down.svg" alt="loss" /></span>
            </div>
        </div>

        <div className="coin-details-section">
            <div className="coin-detail-container">
                <div className="coin-details">
                    <div className="coin-details-left">
                        <img src="./coin-bitcoin.svg" alt="bitcoin" />
                        <div>
                            <h2>Bitcoin</h2>
                            <p>$267.87</p>
                        </div>
                    </div>

                    <div className="coin-details-right">
                        <p>$ 8456.87</p>
                        <p className="red">-2.81%<img src="./trending-down.svg" alt="loss" /></p>
                    </div>
                </div>

                <div className="coin-details-body">
                    <img src="./bitcoin-chart.svg" alt="bitcoin-chart" />
                    <p>Last 07 Days</p>
                </div>

            </div>

            <section className="coin-detail-container">
                <div className="coin-details">
                    <div className="coin-details-left">
                        <img src="./coin-etherum.svg" alt="etherum" />
                        <div>
                            <h2>Etherum</h2>
                            <p>$2.51</p>
                        </div>
                    </div>

                    <div className="coin-details-right">
                        <p>$728.81</p>
                        <p className="red">-1.65%<img src="./trending-down.svg" alt="loss" /></p>
                    </div>
                </div>

                <div className="coin-details-body">
                    <img src="./etherum-chart.svg" alt="etherum-chart" />
                    <p>Last 07 Days</p>
                </div>

            </section>

            <div className="coin-detail-container">
                <div className="coin-details">
                    <div className="coin-details-left">
                        <img src="./coin-ripple.svg" alt="ripple" />
                        <div>
                            <h2>Ripple</h2>
                            <p>$0.684</p>
                        </div>
                    </div>

                    <div className="coin-details-right">
                        <p>$0.8022</p>
                        <p className="green">5.72%<img src="./trending-up.svg" alt="gain" /></p>
                    </div>
                </div>

                <div className="coin-details-body">
                    <img src="./ripple-chart.svg" alt="ripple-chart" />
                    <p>Last 07 Days</p>
                </div>

            </div>

            <div className="coin-detail-container">
                <div className="coin-details">
                    <div className="coin-details-left">
                        <img src="./coin-lite.svg" alt="litecoin" />
                        <div>
                            <h2>Litecoin</h2>
                            <p>$2.49</p>
                        </div>
                    </div>

                    <div className="coin-details-right">
                        <p>$148.52</p>
                        <p className="red">-0.48%<img src="./trending-down.svg" alt="loss" /></p>
                    </div>
                </div>

                <div className="coin-details-body">
                    <img src="./litecoin-chart.svg" alt="litecoin-chart" />
                    <p>Last 07 Days</p>
                </div>

            </div>
        </div>     
            <section>
                <DataTable />
            </section>
            <section>
                <CoinTransfer />
            </section>
            <section className="chart">
               <select name="sort-order" id="" placeholder="Select Coin">
                  <option value="litecoin" disabled>Select Coin</option>
                  <option value="litecoin">Litecoin</option>
                  <option value="bitcoin">Bitcoin</option>
                  <option value="etherum">Ethereum</option>   
               </select>
            <section className="chart-section">
                <div className="chart-content">
                    <div className="chart-title">
                        <p>BTC/USD</p>
                    </div>
                    <div className="chart-prices"> 
                    <div>
                        <h4>Last Price</h4>
                        <p>$8,456.87</p>
                    </div>
                    <div>
                       <h4>Daily Changes</h4>
                       <p>$267.87</p>
                    </div>
                    <div>
                      <h4>(24) Volume</h4>
                      <p>16,649,871 BTC</p>
                    </div>
                    </div>
                </div>
                <Chart />
            </section>
            </section> 
            <section>
                <OrderTable />
            </section>   
            <footer>
              <p>2024 &copy; No Rights</p>
           </footer>     
      </section>
     
 

        </>

    );
}

export default Main;