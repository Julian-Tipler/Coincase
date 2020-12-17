import React from 'react';
import CoinGraph from '../coin_graph/coin_graph'
import WatchListContainer from '../portfolio/watchlist_container'

class Home extends React.Component {
    render() {
        return(
            <div className='portfolio-content'>
                <div className='portfolio-graph'>Portfolio Graph</div>
                <div className='watch-list'>
                    <div>Watchlist</div>
                    <WatchListContainer/>
                </div>
                <div className='your-portfolio-and-recent-transactions'>
                    <div className='your-portfolio'>Your Portfolio</div>
                    <div className='recent-transactions'>Recent Transactions</div>
                </div>
           
                
            </div>
        )
    }
}

export default Home















// {/* <div>
//                         <div className='watch-list-boxes'>
//                             <div className='watch-list-top-row'></div>
//                             {/* <div><CoinGraph /> graph1</div>
//                             <div><CoinGraph /> graphs2</div>
//                             <div><CoinGraph /> graph3</div> */}
// <div className='watch-list-bottom-row'></div>
// {/* <div><CoinGraph /> graph4</div>
//                             <div><CoinGraph />graph5</div>
//                             <div><CoinGraph />graph6</div> */}
//                         </div >
//                     </div > * /}