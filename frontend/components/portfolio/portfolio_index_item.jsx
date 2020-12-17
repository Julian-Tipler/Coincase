import React from 'react';

const PortfolioIndexItem = props => {
    return(
        <tr className='portfolio-index-item'>
            <td className='portfolio-index-item-name'>{props.id}:</td>
            <td className='portfolio-index-item-quantity'>{props.quantity}</td>
        </tr>
    )
}

export default PortfolioIndexItem