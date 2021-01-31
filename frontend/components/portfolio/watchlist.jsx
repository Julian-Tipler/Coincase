import React from 'react';
import CoinGraphContainer from '../coin_graph/coin_graph_container'
import WatchListCoinGraph from '../coin_graph/watch_list_coin_graph'
import * as APIUtil from '../../util/gecko_api_util'

class WatchList extends React.Component {
    constructor(props) {  
        super(props)
        this.topSix = this.topSix.bind(this)
    }

    componentDidMount(){
        APIUtil.fetchTopCoins()
        .then(coins=> {
            this.props.fetchTopSixHistoricalData(coins[0].id,0)
            this.props.fetchTopSixHistoricalData(coins[1].id,1)
            this.props.fetchTopSixHistoricalData(coins[2].id,2)
            this.props.fetchTopSixHistoricalData(coins[3].id,3)
            this.props.fetchTopSixHistoricalData(coins[4].id,4)
            this.props.fetchTopSixHistoricalData(coins[5].id,5)
        })
    }

    topSix() {
        return Object.values(this.props.topCoins).slice(0, 6)
    }

    render() {
        if (Object.values(this.props.topSixCoinsHistoricalData).some(el=> el===null)) {
            return <div>watchlist loading...</div>
        }
        return(
            <div className='top-six-graphs'>
                {Object.values(this.props.topSixCoinsHistoricalData).map((coin, i) => (
                    <div className='top-six-graph' key={i}>
                        <WatchListCoinGraph 
                        coin={coin[1]}
                        id={coin[0]}
                        index={i}
                        />
                    </div>      
                ))}
            </div>
        )
    }
}

export default WatchList
