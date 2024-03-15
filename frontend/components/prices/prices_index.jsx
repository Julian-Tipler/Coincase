import React from "react";
import PricesIndexItem from "./prices_index_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowsAltV,
} from "@fortawesome/free-solid-svg-icons";

//Powered by CoinGecko API
export default class PricesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      toggled: "sort-market-cap",
      direction: "descending",
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const coins = this.props.coins;
    this.setState({
      coins: coins,
      toggled: "sort-market-cap",
      direction: "descending",
    });
  }

  toggle(e, category) {
    e.preventDefault();
    let newCoins;
    let toggled;
    let direction;
    switch (category) {
      case "sort-name":
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        toggled = "sort-name";
        if (
          this.state.toggled !== "sort-name" ||
          this.state.direction === "ascending"
        ) {
          newCoins = this.state.coins.sort(
            (a, b) =>
              alphabet.indexOf(a.id.charAt(0)) -
              alphabet.indexOf(b.id.charAt(0))
          );
          direction = "descending";
        } else {
          newCoins = this.state.coins.sort(
            (a, b) =>
              alphabet.indexOf(b.id.charAt(0)) -
              alphabet.indexOf(a.id.charAt(0))
          );
          direction = "ascending";
        }
        break;
      case "sort-price":
        toggled = "sort-price";
        if (
          this.state.toggled !== "sort-price" ||
          this.state.direction === "ascending"
        ) {
          newCoins = this.state.coins.sort(
            (a, b) => b.current_price - a.current_price
          );
          direction = "descending";
        } else {
          newCoins = this.state.coins.sort(
            (a, b) => a.current_price - b.current_price
          );
          direction = "ascending";
        }
        break;
      case "sort-change":
        toggled = "sort-change";
        if (
          this.state.toggled !== "sort-change" ||
          this.state.direction === "ascending"
        ) {
          newCoins = this.state.coins.sort(
            (a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          );
          direction = "descending";
        } else {
          newCoins = this.state.coins.sort(
            (a, b) =>
              a.price_change_percentage_24h - b.price_change_percentage_24h
          );
          direction = "ascending";
        }
        break;
      case "sort-market-cap":
        toggled = "sort-market-cap";
        if (
          this.state.toggled !== "sort-market-cap" ||
          this.state.direction === "ascending"
        ) {
          newCoins = this.state.coins.sort(
            (a, b) => b.market_cap - a.market_cap
          );
          direction = "descending";
        } else {
          newCoins = this.state.coins.sort(
            (a, b) => a.market_cap - b.market_cap
          );
          direction = "ascending";
        }
        break;
    }
    this.setState({
      coins: [...newCoins],
      toggled: toggled,
      direction: direction,
    });
  }

  render() {
    const numItemsShown = this.props.numItemsShown;
    if (this.props.coins.length <= 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <table className="coin-table">
          <tbody>
            <tr className="coin-title-row">
              <td>
                <button
                  className="index-reorder-button"
                  id="hash-title"
                  onClick={(e) => this.toggle(e, "sort-market-cap")}
                >
                  #{" "}
                </button>
              </td>
              <td id="name-title">
                <button
                  className="index-reorder-button"
                  id="sort-name"
                  onClick={(e) => this.toggle(e, "sort-name")}
                >
                  Name
                  <FontAwesomeIcon
                    className={`index-arrow-icon ${
                      this.state.toggled === "sort-name" ? "toggled" : undefined
                    }`}
                    icon={faArrowsAltV}
                  />
                </button>
              </td>
              <td>
                <button
                  className="index-reorder-button"
                  id="sort-price"
                  onClick={(e) => this.toggle(e, "sort-price")}
                >
                  Price
                  <FontAwesomeIcon
                    className={`index-arrow-icon ${
                      this.state.toggled === "sort-price"
                        ? "toggled"
                        : undefined
                    }`}
                    icon={faArrowsAltV}
                  />
                </button>
              </td>
              <td>
                <button
                  className="index-reorder-button"
                  id="sort-change"
                  onClick={(e) => this.toggle(e, "sort-change")}
                >
                  Change
                  <FontAwesomeIcon
                    className={`index-arrow-icon ${
                      this.state.toggled === "sort-change"
                        ? "toggled"
                        : undefined
                    }`}
                    icon={faArrowsAltV}
                  />
                </button>
              </td>
              <td>
                <button
                  className="index-reorder-button"
                  id="sort-market-cap"
                  onClick={(e) => this.toggle(e, "sort-market-cap")}
                >
                  Market Cap
                  <FontAwesomeIcon
                    className={`index-arrow-icon ${
                      this.state.toggled === "sort-market-cap"
                        ? "toggled"
                        : undefined
                    }`}
                    icon={faArrowsAltV}
                  />
                </button>
              </td>
              <td>Trade</td>
            </tr>
            {this.state.coins.slice(0, numItemsShown).map((coin, i) => (
              <PricesIndexItem
                index={i + 1}
                id={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                current_price={coin.current_price}
                price_change_24h={coin.price_change_percentage_24h}
                market_cap={coin.market_cap}
                key={coin.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
