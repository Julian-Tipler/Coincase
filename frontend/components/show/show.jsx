import React from 'react';
import BuySellBoxContainer from '../buy_sell_box/buy_sell_box_container';

class Show extends React.Component {
    constructor(props) {  
      super(props)
    }

    componentDidMount() {
        this.props.fetchCoin(this.props.coinId)
    }

    render() {
        // console.log(this.props)
        const {coinId} = this.props
        return(
            <div>
            <div>{coinId}</div>
            <div>GRAPH</div>
            <div><BuySellBoxContainer coinId={coinId}/></div>
            </div>
        )
    }
}

export default Show
