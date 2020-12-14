import React from 'react';
import BuySellBoxContainer from '../buy_sell_box/buy_sell_box_container';
import CoinGraph from '../coin_graph/coin_graph'

class Show extends React.Component {
    constructor(props) {  
      super(props)
    }


    render() {
        // console.log('show-render')
        
        const {id} = this.props
        return(
            <div>
                <div>{id}</div>
                <div>
                    {/* <CoinGraph
                    id={id} */}
                    />
                </div>
                <div>
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
