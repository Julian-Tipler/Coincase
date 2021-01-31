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
                            <div className='icon-circle'>
                                <FontAwesomeIcon icon={faHome} />
                            </div>
                            <div>Home</div>
                        </Link>
                        <Link id='signed-in-header-portfolio' to='/portfolio'>
                            <div className='icon-circle'>
                                <FontAwesomeIcon icon={faChartPie} />
                            </div>
                            <div>Portfolio</div>
                        </Link>
                        <Link id='signed-in-header-prices' to='/prices'>
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
                        <button className='buy-button'>Buy</button>
                        <button className='sell-button'>Sell</button>
                        <button id='logout-button'onClick={()=> this.props.logout()}>Logout</button>
                    </span>

                </div>
            </div>
        )
    }  
}

export default SignedInHeader