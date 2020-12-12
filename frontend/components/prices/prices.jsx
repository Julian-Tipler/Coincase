import React from 'react';
import PricesIndex from './prices_index'

class Prices extends React.Component {
    componentDidMount() {
        this.props.fetchTopCoins()
    }
    render() {
        return(
            <div>
                <div>Coins Index</div>
                <PricesIndex coins={this.props.coins}/>
            </div>
        )
    }
}

export default Prices
