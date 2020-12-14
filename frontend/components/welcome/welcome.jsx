import React from 'react';
import {
    Link,
} from 'react-router-dom';
import PricesIndex from '../prices/prices_index'

class Welcome extends React.Component {
    componentDidMount() {
        this.props.fetchTopCoins()
    }
    render() {
        // console.log(this.props)
        return(
            <div className='welcome-full-page'>
                <h1>WELCOME!</h1>
                <div>
                    <PricesIndex coins={this.props.coins}/>
                </div>
            </div>
            

        )
    }
}

export default Welcome