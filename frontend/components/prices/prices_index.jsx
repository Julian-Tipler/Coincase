import React from 'react';
import PricesIndexItem from './prices_index_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';


//Powered by CoinGecko API
class PricesIndex extends React.Component {
    
    constructor(props) {  
      super(props)
      this.state = {
        coins: [],
        isAlphabetical: false,
        isSortedPrice: false,
        isSortedChange: false,
        isSortedMarketCap: false
      }
      this.toggleSortByName = this.toggleSortByName.bind(this)
      this.toggleSortPrice = this.toggleSortPrice.bind(this)
      this.toggleSortChange = this.toggleSortChange.bind(this)
      this.toggleMarketCap = this.toggleMarketCap.bind(this)
    }

    componentDidMount () {
        const coins = this.props.coins
        this.setState({
            coins: coins,
            Order: true
        })
    }

    toggleSortByName (e) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        const coins = this.props.coins.slice()
        let newCoins
        if (this.state.isAlphabetical) {
            newCoins = coins.sort((a, b) => alphabet.indexOf(b.id.charAt(0)) - alphabet.indexOf(a.id.charAt(0)))
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        } else {
            newCoins = coins.sort((a, b) => alphabet.indexOf(a.id.charAt(0)) - alphabet.indexOf(b.id.charAt(0)))
            this.setState({
                coins: newCoins,
                isAlphabetical: true,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        }
    }
    
    toggleSortPrice (e) {
        const coins = this.props.coins.slice()
        //work without slice?
        let newCoins
        if (this.state.isSortedPrice) {
            newCoins = coins.sort((a, b) => a.current_price - b.current_price)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        } else {
            newCoins = coins.sort((a, b) => b.current_price - a.current_price)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: true,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        }
    }

    toggleSortChange(e) {
        const coins = this.props.coins.slice()
        let newCoins
        if (this.state.isSortedChange) {
            newCoins = coins.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        } else {
            newCoins = coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: true,
                isSortedMarketCap: false

            })
        }
    }

    toggleMarketCap(e) {
        const coins = this.props.coins.slice()
        let newCoins
        if (this.state.isSortedMarketCap) {
            newCoins = coins.sort((a, b) => a.market_cap - b.market_cap)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false
            })
        } else {
            newCoins = coins.sort((a, b) => b.market_cap - a.market_cap)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: true
            })
        }
    }

    render() {
        const numItemsShown = this.props.numItemsShown
        if (this.props.coins.length <= 0) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <table className='coin-table'>
                    <tbody>
                    <tr className='coin-title-row' >
                        <td id='hash-title'>
                            <div>#</div>
                        </td>
                        <td id='name-title'>
                            <button className='index-reorder-button' onClick={this.toggleSortByName}>Name<FontAwesomeIcon className='index-arrow-icon'icon={faArrowsAltV} /></button>
                        </td>
                        <td>
                            <button className='index-reorder-button' onClick={this.toggleSortPrice} >Price<FontAwesomeIcon className='index-arrow-icon'icon={faArrowsAltV} /></button>
                        </td>
                        <td>
                            <button className='index-reorder-button' onClick={this.toggleSortChange} >Change<FontAwesomeIcon className='index-arrow-icon'icon={faArrowsAltV} /></button>
                        </td>
                        <td>
                            <button className='index-reorder-button' onClick={this.toggleMarketCap} >Market Cap<FontAwesomeIcon className='index-arrow-icon'icon={faArrowsAltV} /></button>
                        </td>
                        <td>Trade</td> 
                    </tr>
                    {this.state.coins.slice(0,numItemsShown).map((coin, i) => (
                        <PricesIndexItem
                        index={i+1}
                        id={coin.id}
                        image={coin.image}
                        name={coin.name}
                        symbol={coin.symbol}
                        current_price={coin.current_price}
                        price_change_24h={coin.price_change_percentage_24h}
                        market_cap={coin.market_cap}
                        key={coin.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PricesIndex








{/* {props.coins.map((coin,i) => (
    <PricesIndexItem 
    index={i}
    image={coin.image}
    name={coin.name}
    current_price={coin.current_price}
    price_change_24h={coin.price_change_24h}
    market_cap={coin.market_cap}
    key={coin.id}/>
))} */}