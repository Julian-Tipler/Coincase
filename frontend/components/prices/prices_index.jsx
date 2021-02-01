import React from 'react';
import PricesIndexItem from './prices_index_item'


//Powered by CoinGecko API
class PricesIndex extends React.Component {
    
    constructor(props) {  
      super(props)
      this.state = {

      }
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
                        <td id='hash-title'><button onClick={this.handleClickHash} >#</button></td>
                        <td id='name-title'><button>Name</button></td>
                        <td ><button>Price</button></td>
                        <td ><button>Change</button></td>
                        <td ><button>Market Cap</button></td>
                        <td >Trade</td> 
                    </tr>
                    {this.props.coins.map((coin, i) => (
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