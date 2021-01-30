import React from 'react';
import PricesIndex from './prices_index'

class Prices extends React.Component {
    componentDidMount() {
        this.props.fetchCoinsIndex()
    }
    render() {
        return(
            <div className='prices-content'>
                <h1 className='prices-title'>Coins Index</h1>
                <div className='price-index-table-box'>
                    <PricesIndex coins={this.props.coinsIndex} />
                </div>
            </div>
        )
    }
}

export default Prices
