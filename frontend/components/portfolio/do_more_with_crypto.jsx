import React from 'react';
import { Link } from 'react-router-dom'

class DoMoreWithCrypto extends React.Component {
    render() {
        return(
            <div>
                <span>
                    <div>Do More with Crypto</div>
                </span>
                <Link to='https://www.linkedin.com/in/julian-t-87a2a0a4/'>
                    <div>Coinbase Card</div>
                    <div>Spend crypto, get rewards</div>
                </Link>
                <Link to='https://www.linkedin.com/in/julian-t-87a2a0a4/'>
                    <div>Invest over time</div>
                    <div>Buy crypto every day, week, or month</div>
                </Link>
            </div>
        )
    }
}

export default DoMoreWithCrypto
