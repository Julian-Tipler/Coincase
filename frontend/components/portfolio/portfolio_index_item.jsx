import React from 'react';

const PortfolioIndexItem = props => {
    console.log('ping')
    return(
        <div className='index-item'>
            <div>{props.id}:</div>
            <div>{props.quantity}</div>
        </div>
    )
}

export default PortfolioIndexItem