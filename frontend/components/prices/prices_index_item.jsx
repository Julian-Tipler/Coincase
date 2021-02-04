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
        arg>0 ? "+" + arg.toFixed(2) : arg.toFixed(2)
    )
    if (!props.id || !props.price_change_24h) return <tr><td>Loading...</td></tr>

    return(   
        <tr className='coin-table-row item'>
            <td className='top-column'>{props.index}</td>
            <td onClick={() => goto()} className='name-id-abbreviation'>
                <div className='coin-icon-container'><img src={props.image} className='coin-icon' /></div>
                <div>{props.name} </div>  
                <div className='coin-index-symbol'>{props.symbol.toUpperCase()}</div>
            </td>
            <td >{currentPriceFormated(props.current_price)}</td>
            <td className={`${color}`}>{priceChange24hFormated(props.price_change_24h)}%</td>
            <td >{marketCapFormated(props.market_cap)}</td>
            <td ><button onClick={() => goto()} className='trade-button'>Trade</button></td>
        </tr>
    )
    
}

export default withRouter(PricesIndexItem)

         