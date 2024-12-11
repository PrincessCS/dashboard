import React from "react";

function OrderTable({showSideNav}){
    return(
        <>
         <section className="order-section">
                <div className={`order-container ${showSideNav ? "" : "unshift"}`}>
                    <div className="order">
                        <div className="order-header">
                            <h4>Sell Order</h4>
                            <select name="sort-order" id="">
                                <option value="sort">Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                        <table>
                            <thead>
                            <tr>
                                <th>Price per BTC</th>
                                <th>BTC Amount</th>
                                <th>Total($)</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                            <tr>
                                <td>$1042.6487</td>
                                <td>0.253482</td>
                                <td>$2745.25</td>
                            </tr>

                            <tr>
                                <td>$1245.6870</td>
                                <td>0.235542</td>
                                <td>$2472.42</td>
                            </tr>

                            <tr>
                                <td>$1262.4584</td>
                                <td>0.246287</td>
                                <td>$2525.28</td>
                            </tr>

                            <tr>
                                <td>$1435.9524</td>
                                <td>0.262478</td>
                                <td>$2244.68</td>
                            </tr>

                            <tr>
                                <td>$1522.5468</td>
                                <td>0.264488</td>
                                <td>$2815.41</td>
                            </tr>

                            <tr>
                                <td>$2815.41</td>
                                <td>0.272432</td>
                                <td>$2945.16</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="order">
                        <div className="order-header">
                            <h4>Buy Order</h4>
                            <select name="sort-order" id="" placeholder="Sort By">
                                <option value="sort">Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                        <table>
                            <tr>
                                <th>Price per BTC</th>
                                <th>BTC Amount</th>
                                <th>Total($)</th>
                            </tr>

                            <tr>
                                <td>$1142.6480</td>
                                <td>0.253951</td>
                                <td>$2245.51</td>
                            </tr>

                            <tr>
                                <td>$1248.6870</td>
                                <td>0.234854</td>
                                <td>$2418.42</td>
                            </tr>

                            <tr>
                                <td>$1262.6884</td>
                                <td>0.246545</td>
                                <td>$2565.28</td>
                            </tr>

                            <tr>
                                <td>$1135.5924</td>
                                <td>0.262843</td>
                                <td>$2261.68</td>
                            </tr>

                            <tr>
                                <td>$1522.1568</td>
                                <td>0.268844</td>
                                <td>$2892.41</td>
                            </tr>

                            <tr>
                                <td>$1524.6270</td>
                                <td>0.282342</td>
                                <td>$2912.16</td>
                            </tr>
                        </table>
                    </div>
                </div>

            </section>
        </>
    );

}
export default OrderTable;