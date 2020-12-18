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
                    <div>
                    </div>
                    <div id='trade-logout-buttons'>
                        {/* <button>Trade</button> */}
                        <button className='logout-button'onClick={()=> this.props.logout()}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }  
}

export default SignedInHeader