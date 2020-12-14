import React from 'react';

class BuySellBox extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
        user_id: this.props.currentUser,
        coin_id:"", 
        price: 0,
        quantity: 1,
        order_type: 'buy'
    }
      this.setState = this.setState.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            coin_id:this.props.targetCoin.id,
            price: this.props.targetCoin.market_data.current_price.usd})
    }
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        const transaction = Object.assign({}, this.state);
        this.props.createTransaction(transaction)
    }


    whichTab() {
        switch (this.state.order_type) {
            case 'buy': return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" 
                            placeholder='$0'
                            onChange={this.update('quantity')}/>
                            <div>{`${this.props.targetCoin.id}`}</div>
                        </div>
                        <div>You can buy up to $25,000</div>
                        <div>One time purchase</div>
                        <div className='coin-selector'></div>
                        <div className='bank-selector'></div>
                        <button type='submit'>Buy {`${this.props.id}`}</button>
                        <div>{`${this.props.id}`} balance:</div>
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

    onClickTabItem(order_type) {
        this.setState({order_type:order_type})
    }

    render() {
        // console.log(this.props)
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
                <div>
                    {this.props.targetCoin.id} is the target coin
                </div>
            </div>
        )
    }
}

export default BuySellBox
