import React from 'react';
import PortfolioIndex from './portfolio_index'
import TransactionsIndex from './transactions_index'
import DoMoreWithCrypto from '../extra_boxes/do_more_with_crypto'

class Portfolio extends React.Component {
    constructor(props) {  
      super(props)
      this.state = {
        portfolio:{},
        portfolioWorth:0
      }
      this.portfolioWorth = this.portfolioWorth.bind(this)
    }
    componentDidMount() {
        this.props.fetchPortfolio()
        this.props.fetchTransactions()
        this.props.fetchUserDetails(this.props.currentUser)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userCoinPrices !== this.props.userCoinPrices) {
            this.setState({
                portfolioWorth: this.portfolioWorth()
            })
        }
    }

    portfolioWorth() {
        var worth=0
        if (Object.keys(this.props.userCoinPrices).length === Object.keys(this.props.portfolio).length) {
            Object.keys(this.props.portfolio).forEach(id=> {
                worth += this.props.userCoinPrices[id].market_data.current_price.usd
            })
        }
            return worth.toFixed(2)
    }

    render() {
        return(
            <div className='portfolio-content'>
                <div className='portfolio-chart-box'>
                    <div className='portfolio-balance'>
                        <div className='portfolio-balance-title'>Portfolio balance:</div>
                        <div className='portfolio-balance-amount'>${this.state.portfolioWorth}</div>
                    </div>
                    {/* <div className='portfolio-graph'>
                        -portfolio graph goes here-
                    </div> */}  
                </div>
                <div className='portfolio-assets-and-transactions'>
                    
                    <div className='portfolio-index-box' id='portfolio-index-box-portfolio'>
                        <div className='portfolio-index-title title'>
                            Your assets:
                        </div>
                        <div>
                            <PortfolioIndex portfolio={this.props.portfolio} userCoinPrices={this.props.userCoinPrices} userBuyingPower={this.props.userBuyingPower}/>
                        </div>
                    </div>

                    <div className='transactions-box box-title' id='transactions-box-portfolio'>
                        <div className='transactions-title title'>
                            Recent Transactions
                        </div>
                        <div>
                            <TransactionsIndex transactions={this.props.transactionsIndex}/>
                        </div>
                    </div>

                </div>
                <div className='do-more-with-crypto-box'>
                    <DoMoreWithCrypto/>
                </div>
            </div>
        )
    }
}

export default Portfolio
