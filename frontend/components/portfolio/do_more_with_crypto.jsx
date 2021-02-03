import React from 'react';
import { Link } from 'react-router-dom'

class DoMoreWithCrypto extends React.Component {
    render() {
        return(
            <div>
                <div className='.portfolio-do-more-with-crypto-item1'>
                    <div>Do More with Crypto</div>
                </div>
                <div className='.do-more-with-crypto-item2'>
                    <a className='portfolio-div-link' href="https://www.linkedin.com/in/julian-t-87a2a0a4/">
                        <div>Coinbase Card</div>
                        <div>Spend crypto, get rewards</div>
                    </a>
                </div>
                <div className='.do-more-with-crypto-item2'>
                    <a className='portfolio-div-link' href="https://www.linkedin.com/in/julian-t-87a2a0a4/">
                        <div>Invest over time</div>
                        <div>Buy crypto every day, week, or month</div>
                    </a>
                </div>
                
            </div>
        )
    }
}

export default DoMoreWithCrypto
