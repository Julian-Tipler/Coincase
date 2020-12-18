import React from 'react';
import CoinGraphContainer from '../coin_graph/coin_graph_container'
import WatchListCoinGraph from '../coin_graph/watch_list_coin_graph'

class WatchList extends React.Component {
    constructor(props) {  
        super(props)
        this.topSix = this.topSix.bind(this)
    }

    componentDidMount(){
        this.props.fetchTopCoins()
    }

    topSix() {
        return Object.values(this.props.topCoins).slice(0, 6)
    }

    render() {
        if (Object.keys(this.props.topCoins).length === 0) {
            return <div>watchlist loading...</div>
        }
        return(
            <div className='top-six-graphs'>
                {this.topSix().map((coin, i) => (
                    <div className='top-six-graph'>
                        <WatchListCoinGraph 
                        id={coin.id}
                        index={i}
                        fetchCoinHistoricalData = {this.props.fetchCoinHistoricalData}
                        topSixCoinsHistoricalData={this.props.topSixCoinsHistoricalData}
                        key={i}
                        />
                    </div>      
                ))}
            </div>
        )
    }
}

export default WatchList
