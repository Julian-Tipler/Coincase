{
	entities: {
	    users: {
            1: {
                id: 1,
                username: 'Julian44',
                cash: 10000000
            },
            2: {
                id: 2,
                username: 'Bradley66',
                cash: 450000
            }
        },
        transactions: {
            1: {
                id: 1,
                coin_id: 1,
                sale_price: 1700000,
                quantity: 5
            },
            2: {
                id: 2,
                user_id: 47,
                coin_id: 2,
                sale_price: 4500,
                quantity: 5
            }
        },
        coins: {
            1: {
                id: 1,
                symbol: 'BTC',
                name: 'Bitcoin',
                price: 'generated with external api'
            },
            2: {
                id: 2,
                symbol: 'ETH',
                name: 'Etherium',
                price: 'generated with externam api'
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