{
	entities: {
        coins: {
            coinsIndex: {
                0: {
                    id: "bitcoin", 
                    symbol: "btc",
                    name: "Bitcoin",
                    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                    ...
                }
                1: {
                    id: "etherium",
                    symbol: "eth",
                    name: "Etherium",
                    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                    ...
                }
            },
            coinInfo: {
                id: "etherium",
                symbol: "eth",
                name: "Etherium"
                image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                ...
            },
            coinHistoricalData: {
                market_caps: [
                    [1611640207278, 600008004140.6539],
                    [1611640406724, 600008004140.6539],
                    [1611640800064, 598663449835.5068]
                    ...
                ],
                prices: [
                    [1611640207278, 32261.334854949957],
                    [1611640406724, 32237.22425212955],
                    [1611640800064, 32167.701904576774]
                    ...
                ],
                total_volumes: [
                    [1611640207278, 48247722212.91157],
                    [1611640406724, 48143522744.55253],
                    [1611640800064, 48021164594.771225],
                    ...
                ]
            }
            }
        transactions: {
            transactionsIndex: {
                [
                    {
                        coin_id: "litecoin",
                        created_at: "2020-12-18T17:12:15.508Z",
                        id: 1,
                        order_type: "buy",
                        price: "105.77",
                        quantity: "5.0",
                        updated_at: "2020-12-18T17:12:15.508Z",
                        user_id: "1"
                    },
                    {
                        coin_id: "ethereum",
                        created_at: "2020-12-18T17:13:18.021Z",
                        id: 2,
                        order_type: "buy",
                        price: "641.98",
                        quantity: "1.0",
                        updated_at: "2020-12-18T17:13:18.021Z",
                        user_id: "1"
                    }
                ]
            },
            portfolio: {
                etherium: "1.0",
                litecoin: "4.0"
            },
            buyingPower: {

            }
        }
	},
	session: {
		currentUser: 1
	},
	ui: {
		modalOpen: true
	},
	errors: {
		userErrors: [],
		sessionErrors: [],
		postErrors: []
	}
}