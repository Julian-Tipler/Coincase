import React from 'react';

class Show extends React.Component {
    constructor(props) {  
      super(props)
    }

    componentDidMount() {

    }
    
    render() {
        const {coinSymbol} = this.props
        return(
            <div>{coinSymbol}</div>
        )
    }
}

export default Show
