import React from 'react';

class BuySellBox extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {tab:'buy'}
      this.setState = this.setState.bind(this)
    }
    //need some tertiary statements
    whichTab() {
        switch (this.state.tab) {
            case 'buy': return (
                <div>
                    <input type="text" placeholder='$0'/>
                    <div>You can buy up to $25,000</div>
                    <div>One time purchase</div>
                    <input className='coin-selector'></input>
                    <input className='bank-selector'></input>
                    <button>Buy {`${this.props.id}`}</button>
                    <div>{`${this.props.id}`} balance</div>
                </div>
            )
            case 'sell': return (
                <div>
                    <input type="text" placeholder='$0' />
                    <div>You can buy up to $25,000</div>
                    <div>Sell all</div>
                    <input className='coin-selector'></input>
                    <input className='bank-selector'></input>
                    <button>Sell {`${this.props.id}`}</button>
                    <div>{`${this.props.id}`} balance</div>
                </div>            )
            case 'convert': return (
                <div>
                    <input type="text" placeholder='$0' />
                    <div>You can buy up to $25,000</div>
                    <div>Convert All</div>
                    <input className='from-coin'></input>
                    <input className='to-coin'></input>
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
