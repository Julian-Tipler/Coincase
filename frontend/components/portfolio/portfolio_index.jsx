import React from 'react';
import PortfolioIndexItem from './portfolio_index_item'

const PortfolioIndex = props => {

    return (
        <table>
            <tbody>
            {Object.keys(props.portfolio).map((id, i)=> {
            return <PortfolioIndexItem id={id} quantity={props.portfolio[id]} key={i}/>
            })}
            </tbody>
        </table>
    )

}

export default PortfolioIndex