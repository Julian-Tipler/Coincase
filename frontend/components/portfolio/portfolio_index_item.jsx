import React from 'react';

const PortfolioIndexItem = props => {
    return(
        <div className='portfolio-index-item'>
            <div className='portfolio-index-item-name'>{props.id}:</div>
            <div className='portfolio-index-item-quantity'>{props.quantity}</div>
        </div>
    )
}

export default PortfolioIndexItem