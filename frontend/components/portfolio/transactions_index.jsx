import React from 'react';

class TransactionsIndex extends React.Component {
    render() {
        return(
            <div className='transactions-index'>
                {this.props.transactions.map((transaction,idx) => {
                    return (
                        <span key={idx} className='transactions-index-item'>
                            <div>{transaction.order_type === 'buy'? 'Bought': 'Sold'} {transaction.coin_id}</div>
                            <div>{transaction.order_type === 'buy'? '+': '-'} {transaction.quantity} {transaction.updated_at}</div>
                        </span>
                    )
                })}
            </div>
        )
    }
}

export default TransactionsIndex
