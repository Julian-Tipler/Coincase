import React from 'react';

class TransactionsIndex extends React.Component {
    render() {
        if (Object.values(this.props.transactions).length <=0) {
            return <div className='transactions-index'>no recent transactions</div>
        }
        return(
            <div className='transactions-index'>
                {this.props.transactions.map((transaction,idx) => {
                    return (
                        <div key={idx} className='transactions-index-item'>
                            <div className='transactions-index-transaction-type'>{transaction.order_type === 'buy'? 'Bought': 'Sold'} {transaction.coin_id}</div>
                            <div className='transactions-index-transaction-details'>{transaction.order_type === 'buy'? '+': '-'} {transaction.quantity} {transaction.updated_at}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TransactionsIndex
