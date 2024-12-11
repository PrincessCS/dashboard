import React from "react";

function CoinTransfer({showSideNav}){
    return(
        <>
        <section className={`coin-transfer-section ${showSideNav ? "" : "unshift"}`}>
            <div className="coin-transfer-container">
                <h3>Transfer Coins</h3>
                <p>Payment*<span>Minimum Value “0.001 BTC”</span></p>
                <div className="input-container">
                  <img src="./dolls.svg" alt="dollar" />
                  <input placeholder="Enter your Payment"/>
                  <select>
                    <option value="btc">BTC</option>
                    <option value="btc">BTC</option>
                    <option value="btc">BTC</option>
                  </select>
                </div>
                <p>Wallet Address*</p>
                <div className="input-container">
                  <img src="./wallet.svg" alt="wallet" />
                  <input placeholder="Wxz144Ak25Wxi474dei.."/>
                </div>
                <button className="transfer-btn">Transfer Now</button>
            </div>
            <div className="coin-transfer-container">
                <h3>Wallet Address</h3>
                <p>Payment*<span>Minimum Value “0.001 BTC”</span></p>
                <div className="input-container">
                  <img src="./coin.svg" alt="coin" />
                  <input placeholder="Wxz144Ak25Wxi474dei.."/>
                  <img src="./edge.svg" alt="edge" />
                </div>
                <p>Payment*<span>Minimum Value “0.001 BTC”</span></p>
                <div className="input-container">
                  <img src="./pillar.svg" alt="pillar" />
                  <input placeholder="Wxz144Ak25Wxi474dei.."/>
                  <img src="./edge.svg" alt="edge" />
                </div>
                <button className="view-btn">View All</button>
                <button className="settings-btn">Settings</button>
            </div>
            <div className="coin-transfer-container">
                <h3>Choose Which Asset to Trade</h3>
                <div className="input-container">
                  <select>
                    <option value="btc">BTC 8456.87 </option>
                    <option value="btc">ETH</option>
                    <option value="btc">LTE</option>
                  </select>
                  <input placeholder="0.25"/>
                </div>
                <img src="./arrow.svg" className="arrow" alt="arrow"/>
                <div className="input-container">
                  <select>
                    <option value="btc">ETH 8456.87</option>
                    <option value="btc">BTC</option>
                    <option value="btc">LTE</option>
                  </select>
                  <input placeholder="4500"/>
                </div>
                <p>You could save up to $45.42</p>
                <button className="exchange-btn">Exchange</button>
            </div>

        </section>
        </>
    );
}
export default CoinTransfer;