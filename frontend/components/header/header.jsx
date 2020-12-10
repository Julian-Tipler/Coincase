import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <div className='left-side-items'>coincase</div>
                <div className='right-side-items'>
                    <div>Products</div>
                    <div>Help</div>
                    <div>Prices</div>
                    <div>Sign In</div>
                    <div>Sign Up</div>
                </div>
            </div>
        )
    }
}

export default Header