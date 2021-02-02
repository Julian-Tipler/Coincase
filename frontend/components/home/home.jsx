import React from 'react';
import CoinGraph from '../coin_graph/coin_graph'
import WatchListContainer from '../portfolio/watchlist_container'
import TransactionsIndex from '../portfolio/transactions_index'

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchPortfolio()
        this.props.fetchTransactions()
    }
    render() {
        return(
            <div className='home-content'>
                {/* <div className='portfolio-graph'>Portfolio Graph</div> */}
                <div className='watch-list-box'>
                    <div className='watch-list-title'>Watchlist</div>
                    <WatchListContainer/>
                </div>
                <div className='portfolio-index-box' id='portfolio-index-box-home'>

                </div>
                <div className='recent-transactions-box' id='recent-transactions-box-home'>
                    <div>
                        Recent Transactions
                    </div>
                    <div>
                        <TransactionsIndex transactions={this.props.transactionsIndex}/>
                    </div>
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