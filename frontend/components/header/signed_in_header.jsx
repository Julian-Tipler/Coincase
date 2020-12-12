import React from 'react';
import {
    Link,
} from 'react-router-dom';

class SignedInHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='signed-in-header'>
                <Link to='/users' className='left-side-items'>Coincase Logo</Link>
                <div className='center-items'>
                    <Link to='/users'>Home</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/prices'>Prices</Link>
                </div>
                <div className='right-side-items'>
                    <button>Trade</button>
                    <button onClick={()=> this.props.logout()}>Logout</button>
                </div>
            </div>
        )
    }  
}

export default SignedInHeader