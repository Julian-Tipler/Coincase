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
                    <div>Products</div>
                    <div>Help</div>
                    <div>Prices</div>
                    <Link className='sign' to='/login'>Sign In</Link>
                    <Link className='sign' to='/signup'>Sign Up</Link>
                </div>
            </div>
        )
    }
}

export default Header