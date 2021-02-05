import React from 'react';
import { Link } from 'react-router-dom'

class TransactionsIndex extends React.Component {
    constructor(props) {  
        super(props)
    }

    render() {
        if (Object.values(this.props.transactions).length <=0) {
            return(
                <div  className='portfolio-index-total-balance'>   
                    <Link to='/prices'>Purchase your first coin here!</Link>
                </div>
            )        
        }
        return(
            <div className='transactions-index'>
                {this.props.transactions.map((transaction,idx) => {
                    return (
                        <div key={idx} className='transactions-index-item'>
                            <img className='transactions-arrows-pic' src='./assets/transaction-arrows.png'/>
                            <div>
                                <div className='transactions-index-transaction-type'>{transaction.order_type === 'buy'? 'Bought': 'Sold'} {transaction.coin_id}</div>
                                <div className='transactions-index-transaction-details'>{transaction.order_type === 'buy'? '+': '-'} {transaction.quantity} {transaction.updated_at}</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default TransactionsIndex
