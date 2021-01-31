import React from 'react';

class ComponentName extends React.Component {
    render() {
        return(
            <div>
                {this.props.transactions.map((transaction,idx) => {
                    return <div key={idx}>{transaction.price}</div>
                })}
            </div>
        )
    }
}

export default ComponentName
