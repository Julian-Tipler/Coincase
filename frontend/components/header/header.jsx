import React from 'react';
import {
    Link,
} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <Link to='/' className='logo'>coincase</Link>
                <div className='right-side-items'>
                    <a className='header-links'href="https://www.linkedin.com/in/julian-t-87a2a0a4/" target="_blank" rel="noreferrer">Products</a>
                    <a className='header-links'href="https://www.linkedin.com/in/julian-t-87a2a0a4/" target="_blank" rel="noreferrer">Help</a>
                    <a className='header-links'href="https://www.linkedin.com/in/julian-t-87a2a0a4/" target="_blank" rel="noreferrer">Prices</a>
                    <Link className= {`sign ${this.props.url.slice(1)!=='login'?'sign-in-button':undefined}`} to='/login'>Sign In</Link>
                    <Link className='sign' to='/signup'>Sign Up</Link>
                </div>
            </div>
        )
    }
}

export default Header