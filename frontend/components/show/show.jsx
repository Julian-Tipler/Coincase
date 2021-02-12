import React from 'react';
import BuySellBoxContainer from '../buy_sell_box/buy_sell_box_container';
import CoinGraphContainer from '../coin_graph/coin_graph_container'

class Show extends React.Component {
    constructor(props) {  
      super(props)
    }
    
    componentDidMount() {
        this.props.fetchCoinInfo(this.props.id)
    }

    render() {
        const {id} = this.props
        const {coinInfo} = this.props
        return(
            <div className='show-content' id='show-content'>
                <div className='icon-title-show-page'>
                    {Object.values(coinInfo).length <= 0 ? <div></div> : <img src={`${coinInfo.image.small}`}/>}
                    <div className='show-title'>{id}</div>
                </div>
                <div className='show-coin-graph-and-buy-sell'>
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
            </div>
        )
    }
}

export default Show
