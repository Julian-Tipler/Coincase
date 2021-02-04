import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

class DoMoreWithCrypto extends React.Component {
    render() {
        return(
            <div>
                <div className='do-more-with-crypto-item1'>
                    <div>Do More with Crypto</div>
                </div>

                <div className='do-more-with-crypto-item2 item'>
                    <a className='portfolio-div-link' href="https://www.linkedin.com/in/julian-t-87a2a0a4/">
                        <FontAwesomeIcon className='calendar-icon fa-lg'icon={faCalendarAlt}/>
                        <div className='do-more-with-crypto-text'>
                            <div>Coinbase Card</div>
                            <div className='crypto-extra-small-text'>Spend crypto, get rewards</div>
                        </div>
                    </a>
                </div>
                <div className='do-more-with-crypto-item2 item'>
                    <a className='portfolio-div-link' href="https://www.linkedin.com/in/julian-t-87a2a0a4/">
                        <FontAwesomeIcon className='calendar-icon fa-lg'icon={faAddressCard}/>
                        <div className='do-more-with-crypto-text'>
                            <div>Invest over time</div>
                            <div className='crypto-extra-small-text'>Buy crypto every day, week, or month</div>
                        </div>
                    </a>
                </div>
                
            </div>
        )
    }
}

export default DoMoreWithCrypto
