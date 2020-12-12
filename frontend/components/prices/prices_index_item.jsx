import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    withRouter,
} from 'react-router-dom';

function PricesIndexItem(props) {
    function goto(step){
        props.history.push(`/show/${props.id}`)
    }
    return(   
        <tr onClick={() => goto(2)}className='index-row'>
            <td>{props.index}</td>
            <td><img src={props.image} className='coin-icon' />{props.name}   {props.symbol}</td>
            <td>{props.current_price}</td>
            <td>{props.price_change_24h}</td>
            <td>{props.market_cap}</td>
            <td><button>Trade</button></td>
        </tr>
    )
    
}

export default withRouter(PricesIndexItem)

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