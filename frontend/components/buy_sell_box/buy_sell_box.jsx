import React from 'react';

class BuySellBox extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
          activeTab: 'buy',
          form: {
            user_id: this.props.currentUser,
            coin_id: this.props.id, 
            price: 0,
            quantity: 0,
            order_type: 'buy'
          }
    }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.coinOwned = this.coinOwned.bind(this)
    }

    componentDidMount() {
        this.props.fetchCoinInfo(this.props.id)
        this.props.fetchUserDetails(this.props.currentUser)
        this.props.fetchPortfolio()
        // this.props.clearErrors()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.coinInfo !== this.props.coinInfo) {
            this.setState({
                form:{
                    ...this.state.form,
                    price: this.props.coinInfo.market_data.current_price.usd
                }
            })        
        }
    }

    update(field) {
        return e => {
                this.setState({ 
                    form:{
                        ...this.state.form,
                        [field]: e.currentTarget.value 
                    }
                });
            }
    }
    
    handleSubmit(e) {
        e.preventDefault()
        const transaction = Object.assign({}, this.state.form);
        this.props.createTransaction(transaction)
    }
    
    onClickTabItem(order_type) {
        this.setState({
            activeTab: order_type,
            form:{
                ...this.state.form,
                order_type:order_type
            }
        })
    }

    whichTab() {
        switch (this.state.form.order_type) {
            case 'buy': return (
                <form className='buy-sell-form' onSubmit={this.handleSubmit}>
                    <div>
                        <input type="number" 
                        placeholder='0'
                        onChange={this.update('quantity')}
                        className='buy-sell-input'/>
                    </div>
                    {/* {this.props.coinInfo === {}? null : <img src={this.props.coinInfo.image.thumb}/>} */}
                    <div>{`${this.props.id}`}</div>
                    <div>One time purchase</div>
                    <div className='coin-selector'></div>
                    <div className='bank-selector'></div>
                    <button type='submit'>Buy {`${this.props.id}`}</button>
                    
                </form>
            )
            case 'sell': return (
                <form className='buy-sell-form' onSubmit={this.handleSubmit}>
                    <div>
                        <input type="number" 
                        placeholder='0'
                        onChange={this.update('quantity')}
                        className='buy-sell-input'/>
                    </div>
                    {/* {this.props.coinInfo === {}? null : <img src={this.props.coinInfo.image.thumb}/>} */}
                    <div>{`${this.props.id}`}</div>
                    <div>One time sell</div>
                    <div className='coin-selector'></div>
                    <div className='bank-selector'></div>
                    <button type='submit'>Sell {`${this.props.id}`}</button>
                </form>
                )
            
    
        }
    }

    coinOwned() {
        if (!Object.keys(this.props.portfolio).includes(this.props.id)) {  
            return <div> You own 0 {this.props.id}</div>           
        }     
        return(
            <div>   
                You own {this.props.portfolio[this.props.id]} {this.props.id}
            </div>
        )
    }

    render() {
        return(
            <div>
                <div className = 'buy-sell-header'>       
                    <button className={this.state.activeTab==='buy' ? 'tab-selected' : 'tab-unselected'} id='buy-sell-buy-button' onClick={()=> this.onClickTabItem('buy')}>Buy</button>
                    <button className={this.state.activeTab==='sell' ? 'tab-selected' : 'tab-unselected'} onClick={()=> this.onClickTabItem('sell')}>Sell</button>
                    {/* <button onClick={()=> this.onClickTabItem('convert')}>Convert</button> */}
                </div>

                <div className ='buy-sell-body'>
                    {this.whichTab()}
                    <div>Total cost of transaction: {(this.state.form.price*this.state.form.quantity).toFixed(2)}</div>
                    {this.coinOwned()}
                    <div>{`${this.props.id}`} price:</div>
                    <div>${this.state.form.price}</div>
                    <div>Your balance usd:</div>
                    <div>{`${this.props.userBuyingPower}`}</div>
                    <div>
                        {this.props.errors.transactions.map((error, i) => <div className='error-message'key={`error ${i}`}>error: {error}</div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default BuySellBox
