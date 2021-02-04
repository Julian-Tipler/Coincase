import React from 'react';

const PortfolioIndexItem = props => {

    if (Object.values(props.userCoinPrices).length <= 0) {
        return <div></div>
    }

    return(
        <div className='portfolio-index-item'>
            <div className='portfolio-index-item-icon-and-id'>
                <img className='portfolio-index-item-icon'src={props.userCoinPrices[props.id].image.thumb}/>
                <div className='portfolio-index-item-id'>{props.id}:</div>
            </div>
            <div className='portfolio-index-item-worth'>${props.userCoinPrices[props.id].market_data.current_price.usd*props.quantity}</div>
            <div className='portfolio-index-item-quantity'>{props.quantity}</div>
        </div>
    )
}

export default PortfolioIndexItem