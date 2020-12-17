import React from 'react';
import CoinGraphContainer from '../coin_graph/coin_graph_container'

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
        console.log(this.topSix())
        return(
            <div>
                {this.topSix().map(coin => (
                    <div>
                        {/* <CoinGraphContainer id={coin.id}/> */}
                    </div>      
                ))}
            </div>
        )
    }
}

export default WatchList
