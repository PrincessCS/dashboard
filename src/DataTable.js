import React from "react";

function DataTable(){
    return(
        <>       
        <section className="data-table-section">
                <div className="data-table-container">
                    <div className="data-table-market">
                        <h2>Data Table Market Capital</h2>
                        <p>Todays currency price and changes</p>
                        <table>
                            <tr>
                                <th>Coin Name</th>
                                <th>Price</th>
                                <th>Changes 24 (%)</th>
                            </tr>

                            <tr>
                                <td className="coin-data"><img src="./bitcoin.svg" alt="bitcoin" />Bitcoin</td>
                                <td>$8,456.7</td>
                                <td className="price-loss">-2.81%<img src="./trending-down.svg" alt="loss" /></td>
                            </tr>

                            <tr>
                                <td className="coin-data"><img src="./etherum.svg" alt="ethereum" /> Ethereum</td>
                                <td>$729.81</td>
                                <td className="price-loss">-1.65%<img src="./trending-down.svg" alt="loss" /></td>
                            </tr>
                            
                            <tr>
                                <td className="coin-data"><img src="./ripple.svg" alt="ripple" />Ripple</td>
                                <td>$0.8022</td>
                                <td className="price-gain">5.72%<img src="./trending-up.svg" alt="gain" /></td>
                            </tr>

                            <tr>
                                <td className="coin-data"><img src="./coin-lite.svg" alt="litecoin" />Litecoin</td>
                                <td>$148.52</td>
                                <td className="price-loss">-0.48%<img src="./trending-down.svg" alt="loss" /></td>
                            </tr>

                            <tr>
                                <td className="coin-data"><img src="./monero.svg" alt="monero" />Monero</td>
                                <td>$176.88</td>
                                <td className="price-loss">-4.64%<img src="./trending-down.svg" alt="loss" /></td>
                            </tr>

                            <tr>
                                <td className="coin-data"><img src="./dash.svg" alt="dash" />Dash</td>
                                <td>$324.07</td>
                                <td className="price-loss">-2.68%<img src="./trending-down.svg" alt="loss" /></td>
                            </tr>

                            <tr>
                                <td className="coin-data"><img src="./nem.svg" alt="nem" />NEM</td>
                                <td>$0.225547</td>
                                <td className="price-gain">0.72%<img src="./trending-up.svg" alt="gain" /></td>
                            </tr>

                        </table>

                    </div>

                    <div className="trading-activity">
                        <h2>Recent Trading Activities</h2>
                        <p>Trading currency activities</p>

                        <table className="trading-table">
                            <thead>
                            <tr>
                                <th>Deal ID Number</th>
                                <th>Trade Time</th>
                                <th>Last Trade</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                            <tr>
                                <td>DID 1654784520</td>
                                <td>16:25:59</td>
                                <td>$4,85,650</td>
                                <td><button type="button" className="complete-btn">Complete</button></td>
                            </tr>

                            <tr>
                                <td>DID 1244754587</td>
                                <td>18:27:26</td>
                                <td>$2,45,155</td>
                                <td><button type="button" className="pending-btn">Pending</button></td>
                            </tr>

                            <tr>
                                <td>DID 1457787429</td>
                                <td>13:15:48</td>
                                <td>$25,485</td>
                                <td><button type="button" className="cancelled-btn">Cancelled</button></td>
                            </tr>

                            <tr>
                                <td>DID 1334788412</td>
                                <td>17:20:38</td>
                                <td>$30,150</td>
                                <td><button type="button" className="complete-btn">Complete</button></td>
                            </tr>

                            <tr>
                                <td>DID 1224544510</td>
                                <td>19:30:52</td>
                                <td>$1,25,150</td>
                                <td><button type="button" className="cancelled-btn">Cancelled</button></td>
                            </tr>

                            <tr>
                                <td>DID 1260345878</td>
                                <td>18:12:46</td>
                                <td>$8,525</td>
                                <td><button type="button" className="pending-btn">Pending</button></td>
                            </tr>

                            <tr>
                                <td>DID 1350782465</td>
                                <td>21:05:59</td>
                                <td>$3,45,150</td>
                                <td><button type="button" className="complete-btn">Complete</button></td>
                            </tr>

                            <tr>
                                <td>DID 1624484528</td>
                                <td>17:21:45</td>
                                <td>$2,50,350</td>
                                <td><button type="button" className="complete-btn">Complete</button></td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>
        </>
    );
}
export default DataTable;