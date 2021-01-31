import React from 'react';
import {
    Link,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartPie, faChartLine } from '@fortawesome/free-solid-svg-icons'

class SignedInHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className='signed-in-sidebar'>
                    <div className='signed-in-logo'>
                        <Link to='/home'id='logo-small'>coincase</Link>
                    </div>
                    <div className='signed-in-links'>
                        <Link id='signed-in-header-home' to='/home'>
                            <FontAwesomeIcon icon={faHome}/>
                            <div>Home</div>
                        </Link>
                        <Link id='signed-in-header-portfolio' to='/portfolio'>
                            <FontAwesomeIcon icon={faChartPie} />
                            <div>Portfolio</div>
                        </Link>
                        <Link id='signed-in-header-prices' to='/prices'>
                            <FontAwesomeIcon icon={faChartLine} />
                            <div>Prices</div>
                        </Link>
                    </div>
                </div>

                <div className='signed-in-top-bar'>
                    <div id='page-title'>
                        {this.props.queryString}
                    </div>
                    <div>
                        <span>
                            Buy
                        </span>
                        <span>
                            Sell
                        </span>
                        <span id='trade-logout-buttons'>
                            <button className='logout-button'onClick={()=> this.props.logout()}>Logout</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }  
}

export default SignedInHeader