import React from 'react';
import BuySellBoxContainer from '../buy_sell_box/buy_sell_box_container';
import CoinGraph from '../coin_graph/coin_graph'

class Show extends React.Component {
    constructor(props) {  
      super(props)
    }

    componentDidMount() {
        // console.log('show-did-mount')
        const {id} = this.props
        this.props.fetchDailyData(id)
    }


    render() {
        // console.log('show-render')
        
        const {id,targetCoin} = this.props
        return(
            <div>
                <div>{id}</div>
                <div>
                    <CoinGraph
                    id={id}
                    targetCoin={targetCoin}
                    />
                </div>
                <div><BuySellBoxContainer 
                    id={id}
                    targetCoin={targetCoin}
                    />
                </div>
                
            </div>
        )
        //should I pass targetCoin through props or through map state to props ORRR have a fetch happen inside of the graph component
    }
}

export default Show
