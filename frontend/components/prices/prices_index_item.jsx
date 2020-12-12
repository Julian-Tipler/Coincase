import React from 'react';

class PricesIndexItem extends React.Component {
    render() {
        return(
            <div>
                <div>Index</div>
                <div>{this.props.id}</div>
                <div>Image</div>
                <div>{this.props.image}</div>
                <div>Name</div>
                <div>{this.props.name}</div>
                <div>Price</div>
                <div>{this.props.current_price}</div>
                <div>Change</div>
                <div>{this.props.market_cap}</div>
                <div>Market Cap</div>
                <div>{this.props.market_cap}</div>
                <button>Trade</button>
            </div>
        )
    }
}

export default PricesIndexItem
