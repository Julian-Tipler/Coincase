import React from 'react';
import PortfolioIndexItem from './portfolio_index_item'
import {Link} from 'react-router-dom'

const PortfolioIndex = props => {

    if (Object.values(props.portfolio).length <= 0) {                  
        return(
            <div  className='portfolio-index-total-balance'>   
                <Link to='/prices'>Purchase your first coin here!</Link>
            </div>
        )
    }

    if (Object.keys(props.userCoinPrices).length !== Object.keys(props.portfolio).length) {
        return <div>whoops</div>
    }
    
    console.log('inner-props',props.userBuyingPower)

    var worth=0
    Object.keys(props.portfolio).forEach(id=> {
                    worth += props.userCoinPrices[id].market_data.current_price.usd*props.portfolio[id]
                })
    worth = worth.toFixed(2)

    return (
        <div>
            <div className='portfolio-index-item'>
                <div className='portfolio-index-item-icon-and-id'>
                    <div className='portfolio-index-item-icon'/>
                    <div className='portfolio-index-item-id'>USD{':'}</div>
                </div>
                {/* <div className='portfolio-index-item-worth'>${props.userCoinPrices[props.id].market_data.current_price.usd*props.quantity}</div>
                <div className='portfolio-index-item-quantity'>{props.quantity}</div> */}
            </div>
            {Object.keys(props.portfolio).map((id, i)=> {
                return <PortfolioIndexItem id={id} quantity={props.portfolio[id]} userCoinPrices={props.userCoinPrices} key={i}/>
            })}
            <div className='portfolio-index-total-balance'>                       
                <Link to='/portfolio'>
                    Total Balance = {worth}
                </Link>
            </div>
        </div>
    )

}

export default PortfolioIndex


//price={props.userCoinPrices[id].market_data.current_price}