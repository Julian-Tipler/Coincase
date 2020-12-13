import React from 'react';
import BuySellBoxContainer from '../buy_sell_box/buy_sell_box_container';

class Show extends React.Component {
    constructor(props) {  
      super(props)
    }

    componentDidMount() {
        this.props.fetchCoin(this.props.id)
    }

    render() {
        // console.log(this.props)
        
        const {id} = this.props
        return(
            <div>
            <div>{id}</div>
            <div>GRAPH</div>
            <div><BuySellBoxContainer 
            id={id}
            /></div>
            </div>
        )
    }
}

export default Show
