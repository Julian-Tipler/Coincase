import React from 'react';

class BuySellBox extends React.Component {
    constructor(props) {  
      super(props)
      console.log(this.props)
      this.state = {
        id:this.props.targetCoin.id, 
        // price:this.props.targetCoin.market_data.current_price.usd,
        quantity: 0,
        order_type: 'buy'}
      this.setState = this.setState.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.props)
        this.props.createTransaction()
        //what goes in createTransaction?
    }
    whichTab() {
        switch (this.state.order_type) {
            case 'buy': return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder='$0'/>
                        <div>You can buy up to $25,000</div>
                        <div>One time purchase</div>
                        <div className='coin-selector'></div>
                        <div className='bank-selector'></div>
                        <button type='submit'>Buy {`${this.props.id}`}</button>
                        <div>{`${this.props.id}`} balance</div>
                    </form>
                </div>
            )
            case 'sell': return (
                <div>
                    <input type="text" placeholder='$0' />
                    <div>You can buy up to $25,000</div>
                    <div>Sell all</div>
                    <div className='coin-selector'></div>
                    <div className='bank-selector'></div>
                    <button>Sell {`${this.props.id}`}</button>
                    <div>{`${this.props.id}`} balance</div>
                </div>            )
            case 'convert': return (
                <div>
                    <input type="text" placeholder='$0' />
                    <div>We do not support conversion at this time</div>
                    <div>Convert All</div>
                    <div className='from-coin'></div>
                    <div className='to-coin'></div>
                    <button>Convert {`${this.props.id}`}</button>
                    <div>{`${this.props.id}`} balance</div>
                </div>            )
            default: <div>error2</div>
            } 
    }

    onClickTabItem(tab) {
        this.setState({tab:tab})
    }

    render() {
        return(
            <div>
                <div className = 'buy-sell-box-header'>       
                    <button onClick={()=> this.onClickTabItem('buy')}>Buy</button>
                    <button onClick={()=> this.onClickTabItem('sell')}>Sell</button>
                    <button onClick={()=> this.onClickTabItem('convert')}>Convert</button>
                </div>

                <div className ='buy-sell-box-body'>
                    {this.whichTab()}
                </div>
            </div>
        )
    }
}

export default BuySellBox
