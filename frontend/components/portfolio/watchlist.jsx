import React from 'react';
import CoinGraphContainer from '../coin_graph/coin_graph_container'
import WatchListCoinGraph from '../coin_graph/watch_list_coin_graph'

class WatchList extends React.Component {
    constructor(props) {  
        super(props)
        this.state = {
            topSix: []
        }
    }

    componentDidMount(){
        this.props.fetchRemoveCoins()
        this.props.fetchTopSixCoinsHistoricalData()
        .then(() => {
            console.log(this.props.topSixCoinsHistoricalData)
            setTimeout(()=>
                this.setState({topSix:this.props.topSixCoinsHistoricalData}),500
            )
        })
    }

    componentWillUnmount(){
        this.props.fetchRemoveCoins()
    }

    render() {
        // if (this.props.topSixCoinsHistoricalData.length <= 6) {
        //     return <div>watchlist loading.....</div>
        // }
        console.log(this.state.topSix)

        return(
            <div className='top-six-graphs'>
                <div>error...</div>
                {this.state.topSix.map((coin, idx) => {
                    console.log('ping')
                    return(
                    <div className='top-six-graph'>
                        <WatchListCoinGraph 
                        id={Object.keys(coin)}
                        coin={coin}
                        index={idx}
                        key={idx}
                        />
                    </div> 
                    )
                })}
            </div>
        )
    }
}

export default WatchList
