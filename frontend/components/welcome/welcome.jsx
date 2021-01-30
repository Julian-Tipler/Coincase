import React from 'react';
import {
    Link,
} from 'react-router-dom';
import PricesIndex from '../prices/prices_index'

class Welcome extends React.Component {
    componentDidMount() {
        this.props.fetchCoinsIndex()
    }
    render() {
        return(
            <div className='welcome-full-page'>
                <h1>WELCOME!</h1>
                <div>
                    <PricesIndex coins={this.props.coinsIndex}/>
                </div>
            </div>
            

        )
    }
}

export default Welcome