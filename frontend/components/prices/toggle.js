

        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        const coins = this.props.coins.slice()
        let newCoins
        if (this.state.isAlphabetical) {
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        } else {
            newCoins = coins.sort((a, b) => alphabet.indexOf(a.id.charAt(0)) - alphabet.indexOf(b.id.charAt(0)))
            this.setState({
                coins: newCoins,
                isAlphabetical: true,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        }
    
    
    toggleSortPrice (e) {
        const coins = this.props.coins.slice()
        let newCoins
        if (this.state.isSortedPrice) {
            newCoins = coins.sort((a, b) => a.current_price - b.current_price)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        } else {
            newCoins = coins.sort((a, b) => b.current_price - a.current_price)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: true,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        }
    }

    toggleSortChange(e) {
        const coins = this.props.coins.slice()
        let newCoins
        if (this.state.isSortedChange) {
            newCoins = coins.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false

            })
        } else {
            newCoins = coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: true,
                isSortedMarketCap: false

            })
        }
    }

    toggleMarketCap(e) {
        const coins = this.props.coins.slice()
        let newCoins
        if (this.state.isSortedMarketCap) {
            newCoins = coins.sort((a, b) => a.market_cap - b.market_cap)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: false
            })
        } else {
            newCoins = coins.sort((a, b) => b.market_cap - a.market_cap)
            this.setState({
                coins: newCoins,
                isAlphabetical: false,
                isSortedPrice: false,
                isSortedChange: false,
                isSortedMarketCap: true
            })
        }
    }

export default toggle