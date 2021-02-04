import React from 'react';
import {Link} from 'react-router-dom'

const PortfolioIndexItem = props => {

    if (Object.values(props.userCoinPrices).length <= 0) {
        return <div></div>
    }

    return(
        <Link to={`/show/${props.id}`}className='portfolio-index-item item'>
            <div className='portfolio-index-item-icon-and-id'>
                <img className='portfolio-index-item-icon'src={props.userCoinPrices[props.id].image.thumb}/>
                <div className='portfolio-index-item-id'>{props.id}:</div>
            </div>
            <div className='portfolio-index-item-worth'>${props.userCoinPrices[props.id].market_data.current_price.usd*props.quantity}</div>
            <div className='portfolio-index-item-quantity'>{props.quantity}</div>
        </Link>
    )
}

export default PortfolioIndexItem