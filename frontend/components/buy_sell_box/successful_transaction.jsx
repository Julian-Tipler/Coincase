import React from 'react';

function SuccessfulTransaction() {
    console.log('success')
    return(
        <div>
            <div className='transaction-success-box'>
                <div>Your purchase was successful!</div>
            </div>
        </div>
    )
}

export default SuccessfulTransaction