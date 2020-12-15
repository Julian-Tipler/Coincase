import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    withRouter,
} from 'react-router-dom';

function PricesIndexItem(props) {
    function goto(){
        props.history.push(`/show/${props.id}`)
    }
    var color = 'green'
    if (props.price_change_24h < 0) {
        color = 'red'
    }
    const marketCapFormated = (arg) => {

        return Math.abs(Number(arg)) >= 1.0e+9 ? 
        (Math.abs(Number(arg)) / 1.0e+9).toFixed(2) + 'B': 
        Math.abs(Number(arg)) >= 1.0e+6? 
        (Math.abs(Number(arg)) / 1.0e+6).toFixed(2) + 'M': 
        Math.abs(Number(arg)) >= 1.0e+3
    }
    const currentPriceFormated = (arg) => {
        return(
            '$' + arg.toFixed(2)
        )
    }
    const priceChange24hFormated = (arg) => (
        arg>0 ? "+" + arg : arg
    )


    return(   
        <tr onClick={() => goto()}className='index-row'>
            <td>{props.index}</td>
            <td><img src={props.image} className='coin-icon' />{props.name}   {props.symbol}</td>
            <td>{currentPriceFormated(props.current_price)}</td>
            <td className={`${color}`}>{priceChange24hFormated(props.price_change_24h)}%</td>
            <td>{marketCapFormated(props.market_cap)}</td>
            <td><button>Trade</button></td>
        </tr>
    )
    
}

export default withRouter(PricesIndexItem)

         