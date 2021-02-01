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
        isStandardOrder: true
      }
      this.toggleListReverse = this.toggleListReverse.bind(this)
      this.toggleSortByName = this.toggleSortByName.bind(this)
    }

    componentDidMount () {
        const coins = this.props.coins
        this.setState({
            coins: coins,
            Order: true
        })
    }

    toggleListReverse (e) {
        const coins = this.props.coins
        let newCoins = coins.reverse()
        this.setState({
            coins: newCoins
        })
    }

    toggleSortByName (e) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        let newPostList = postList
        if (this.state.isOldestFirst) {
            newPostList = postList.sort((a, b) => a.date > b.date)
        } else {
            newPostList = postList.sort((a, b) => a.date < b.date)
        }
        this.setState({
            postList: newPostList
        })
    }

    render() {
        
        if (this.props.coins.length <= 0) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <table className='coin-table'>
                    <tbody>
                    <tr className='coin-title-row' >
                        <td id='hash-title'><button className='index-reorder-button' onClick={this.toggleListReverse} >#<FontAwesomeIcon className='index-arrow-icon'icon={faArrowsAltV} /></button></td>
                        <td id='name-title'><button className='index-reorder-button' onClick={this.toggleSortByName}>Name</button></td>
                        <td><button className='index-reorder-button'>Price</button></td>
                        <td><button className='index-reorder-button'>Change</button></td>
                        <td><button className='index-reorder-button'>Market Cap</button></td>
                        <td>Trade</td> 
                    </tr>
                    {this.state.coins.map((coin, i) => (
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