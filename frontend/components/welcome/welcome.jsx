import React from "react";
import { Link } from "react-router-dom";
import PricesIndex from "../prices/prices_index";

class Welcome extends React.Component {
  componentDidMount() {
    this.props.fetchTopFourCoins();
  }
  render() {
    if (Object.values(this.props.coins).length <= 0) {
      return <div>loading...</div>;
    }
    return (
      <div className="welcome-page">
        <div>
          <div className="welcome-background-blue"></div>
        </div>
        <div className="welcome-page-content">
          <div className="welcome-message">
            <div id="buy-and-sell-cryptocurrency">
              Buy and sell cryptocurrency
            </div>
            <div id="get-5">
              <img id="bitcoin-pic" src={window.bitcoin} />
              <div>Get $5 in free Bitcoin</div>
            </div>
            <div id="coinbase-is-the">
              Coincase is the easiest place to buy, sell, and manage your
              cryptocurrency portfolio. Jump start your crypto portfolio with $5
              in free Bitcoin after you sign up. Terms apply.
            </div>
          </div>
          <div className="welcome-table-box">
            <PricesIndex coins={this.props.coins} numItemsShown={4} />
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
