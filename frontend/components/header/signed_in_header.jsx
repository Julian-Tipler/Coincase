import React from 'react';
import {
    Link,
} from 'react-router-dom';

class SignedInHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div className='signed-in-header'>
                <Link to='/' className='left-side-items'>coincase</Link>
                <div className = 'center-items'> 
                    <div>Home</div>
                    <div>Portfolio</div>
                    <div>Prices</div>
                    <div>Earn Rewards</div>
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
