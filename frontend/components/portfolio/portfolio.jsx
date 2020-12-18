import React from 'react';
import PortfolioIndex from './portfolio_index'

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
                {/* <div className='recent-transactions-box'>
                    <div>
                        Recent Transactions
                    </div>
                    <div>
                        -recent transactions go here-
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Portfolio
