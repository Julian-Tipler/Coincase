import React from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartPie, faChartLine } from '@fortawesome/free-solid-svg-icons'

class SignedInHeader extends React.Component {
    constructor(props) {
        super(props)

        this.homeColors = this.homeColors.bind(this)
        this.portfolioColors = this.portfolioColors.bind(this)
        this.pricesColors = this.pricesColors.bind(this)
    }

    homeColors() {
        switch(this.props.queryString) {
            case 'Home':
                return 'link-blue'
            default:
                return 'link-default'
        }
    }

    portfolioColors() {
        switch(this.props.queryString) {
            case 'Portfolio':
                return 'link-blue'
            default:
                return 'link-default'
        }
    }

    pricesColors() {
        switch(this.props.queryString) {
            case 'Prices':
                return 'link-blue'
            default:
                return 'link-default'
        }
    }

    render() {
        return (
            <div>
                <div className='signed-in-sidebar'>
                    <div className='signed-in-logo'>
                        <Link to='/home'id='logo-small'>coincase</Link>
                    </div>
                    <div className='signed-in-links'>
                        <Link id='signed-in-header-home' className={this.homeColors()}to='/home'>
                            <div className='icon-circle'>
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <div>Home</div>
                        </Link>
                        <Link id='signed-in-header-portfolio' className={this.portfolioColors()} to='/portfolio'>
                            <div className='icon-circle'>
                                <FontAwesomeIcon icon={faChartPie} />
                            </div>
                            <div>Portfolio</div>
                        </Link>
                        <Link id='signed-in-header-prices' className={this.pricesColors()} to='/prices'>
                            <div className='icon-circle'>
                            <FontAwesomeIcon icon={faChartLine} />
                            </div>
                            <div>Prices</div>
                        </Link>
                    </div>
                </div>

                <div className='signed-in-top-bar'>
                    <span className='page-title'>
                        {this.props.queryString}
                    </span>
                    <span className='right-side-buttons'>
                        <Link to='/prices'className='buy-button'>Buy</Link>
                        <Link to='/prices'className='sell-button'>Sell</Link>
                        <button id='logout-button'onClick={()=> this.props.logout()}>Logout</button>
                    </span>

                </div>
            </div>
        )
    }  
}

export default SignedInHeader