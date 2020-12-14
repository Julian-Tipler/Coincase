import React from 'react';
import CoinGraph from '../coin_graph/coin_graph'

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className='portfolio-graph'>Portfolio Graph</div>
                <div className='watch-list'>
                    <div>Watchlist</div>
                    <div>
                        <div className='portfolio-graph'>
                            <div className='watch-list-top-row'></div>
                            {/* <div><CoinGraph /> graph1</div>
                            <div><CoinGraph /> graphs2</div>
                            <div><CoinGraph /> graph3</div> */}
                            <div className='watch-list-bottom-row'></div>
                            {/* <div><CoinGraph /> graph4</div>
                            <div><CoinGraph />graph5</div>
                            <div><CoinGraph />graph6</div> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div>Your Portfolio</div>
                    <div>Recent Transactions</div>
                </div>
           
                
            </div>
        )
    }
}

export default Home
