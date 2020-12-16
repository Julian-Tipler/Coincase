import React from 'react';
import PortfolioIndexItem from './portfolio_index_item'

const PortfolioIndex = props => {

    return (
        <div>{Object.keys(props.portfolio).map((id, i)=> {
            return <PortfolioIndexItem id={id} quantity={props.portfolio[id]} key={i}/>
        })}
        </div>
    )

}

export default PortfolioIndex