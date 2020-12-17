import React from 'react';
import BuySellBoxContainer from '../buy_sell_box/buy_sell_box_container';
import CoinGraphContainer from '../coin_graph/coin_graph_container'

class Show extends React.Component {
    constructor(props) {  
      super(props)
    }


    render() {
        
        const {id} = this.props
        return(
            <div className='show-content'>
                <div>{id}</div>
                <div className='coin-graph-box'>
                    <CoinGraphContainer
                    id={id}/>
                    
                </div>
                <div className='buy-sell-box'>
                    <BuySellBoxContainer 
                    id={id}
                    />
                </div>
                
            </div>
        )
        //should I pass coinInfo through props or through map state to props ORRR have a fetch happen inside of the graph component
    }
}

export default Show
