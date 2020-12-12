import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    withRouter,
    useHistory
} from 'react-router-dom';

class PricesIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { redirect:false }
        this.showCoin = this.showCoin.bind(this)
    }

    render() {
        return(   
            <tr className='index-row'>
                <td>{this.props.index}</td>
                <td><img src={this.props.image} className='coin-icon'/>{this.props.name}</td>
                <td>{this.props.current_price}</td>
                <td>{this.props.price_change_24h}</td>
                <td>{this.props.market_cap}</td>
                <td><button>Trade</button></td>
            </tr>
        )
    }
}

export default PricesIndexItem

            // <div>
            //     <div>#</div>
            //     <div>{this.props.id}</div>
            //     <div>Image</div>
            //     <div>{this.props.image}</div>
            //     <div>Name</div>
            //     <div>{this.props.name}</div>
            //     <div>Price</div>
            //     <div>{this.props.current_price}</div>
            //     <div>Change</div>
            //     <div>{this.props.market_cap}</div>
            //     <div>Market Cap</div>
            //     <div>{this.props.market_cap}</div>
            //     <button>Trade</button>
            // </divd