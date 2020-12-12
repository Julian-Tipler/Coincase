import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className='portfolio-graph'>Portfolio Graph</div>
                <div className='watch-list'>
                    <div>Watchlist</div>
                    <div>
                        6 top stocks
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
