import React from 'react';
import PortfolioIndexItem from './portfolio_index_item'

const PortfolioIndex = props => {
    if (Object.values(props.portfolio).length <= 0) {
        return <div></div>
    }

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