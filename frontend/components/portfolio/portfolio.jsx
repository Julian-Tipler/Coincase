import React from 'react';
import PortfolioIndex from './portfolio_index'
import TransactionsIndex from './transactions_index'

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
    }

    componentDidUpdate(prevProps) {
        if (prevProps.portfolio !== this.props.portfolio) {
            this.setState({
                portfolio: this.props.portfolio
            })
        }
        if (prevProps.userCoinPrices !== this.props.userCoinPrices) {
            this.setState({
                portfolioWorth: this.portfolioWorth()
            })
        }
    }

    portfolioWorth() {
        var worth=0
        if (Object.keys(this.props.userCoinPrices).length === Object.keys(this.props.portfolio).length) {
            Object.keys(this.state.portfolio).forEach(id=> {
                worth += this.props.userCoinPrices[id].market_data.current_price.usd
            })
        }
            return worth.toFixed(2)
    }

    render() {
        if (Object.values(this.props.transactionsIndex).length <=0) {
            return <div>loading...</div>
        }
        return(
            <div className='portfolio-content'>
                <div className='portfolio-chart-box'>
                    <div className='portfolio-balance'>
                        <div className='portfolio-balance-title'>Portfolio balance:</div>
                        <div>${this.state.portfolioWorth}</div>
                    </div>
                    {/* <div className='portfolio-graph'>
                        -portfolio graph goes here-
                    </div> */}
                </div>
                <div className='portfolio-index-box'>
                    <div className='portfolio-index-box-title'>
                        Your assets:
                    </div>
                    <div>
                        <PortfolioIndex portfolio={this.state.portfolio}/>
                    </div>
                </div>
                <div className='recent-transactions-box'>
                    <div>
                        Recent Transactions
                    </div>
                    <div>
                        <TransactionsIndex transactions={this.props.transactionsIndex}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
