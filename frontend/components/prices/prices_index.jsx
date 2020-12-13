import React from 'react';
import PricesIndexItem from './prices_index_item'



class PricesIndex extends React.Component {
    render() {
        return(
            <table>
                <tbody>
                <tr className='index-row' >
                    <td>#</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Change</td>
                    <td>Market Cap</td>
                    <td>Trade</td>
                </tr>
                {this.props.coins.map((coin, i) => (
                    <PricesIndexItem
                    index={i}
                    id={coin.id}
                    image={coin.image}
                    name={coin.name}
                    symbol={coin.symbol}
                    current_price={coin.current_price}
                    price_change_24h={coin.price_change_24h}
                    market_cap={coin.market_cap}
                    key={coin.id} />
                ))}
                </tbody>
            </table>
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