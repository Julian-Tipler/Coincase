import React from 'react';

class PortfolioChart extends React.Component {

    componentDidmount() {
        //fetch owned coins from backend. this is a get request that returns an array of owned coin id's. basically get the table isolated by user
        //then make it unique, returning just the coin id's [bitcoin, etherium, litecoin]. Save this array in state (user state?) then iterate through it 
        //and for each element do a coingecko fetchinfo. save the prices to a variable [{bitcoin:18000},{etherium:500},litecoin:{3}] send this variable back
        //in a fetch portfolio net worth calculation.
    }

    render() {
        return(
            <div></div>
        )
    }
}

export default PortfolioChart
