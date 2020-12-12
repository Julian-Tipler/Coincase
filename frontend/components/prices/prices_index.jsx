import React from 'react';
import PricesIndexItem from './prices_index_item'

class PricesIndex extends React.Component {
    
    render() {
        console.log(this.props.coins)
        return(
            <div>
                {this.props.coins.map((coin,i) => (
                    <PricesIndexItem 
                    index={i}
                    image={coin.image}
                    name={coin.name}
                    current_price={coin.current_price}
                    price_change_24h={coin.price_change_24h}
                    market_cap={coin.market_cap}
                    key={coin.id}/>
                ))}
            </div>
        )
    }
}

export default PricesIndex
