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
                <div className='signed-in-header'>
                    <Link to='/users' className='signed-in-logo'>Coincase Logo</Link>
                    <div className='signed-in-links'>
                        <div id='signed-in-header-home'><FontAwesomeIcon icon={faHome}/><Link to='/users'>Home</Link></div>
                        <div id='signed-in-header-portfolio'><FontAwesomeIcon icon={faChartPie} /><Link to='/portfolio'>Portfolio</Link></div>
                        <div id='signed-in-header-prices'><FontAwesomeIcon icon={faChartLine} /><Link to='/prices'>Prices</Link></div>
                    </div>
                </div>
                <div className='signed-in-top-bar'>
                    <button>Trade</button>
                    <button onClick={()=> this.props.logout()}>Logout</button>
                </div>
            </div>
        )
    }  
}

export default SignedInHeader