<!-- # Coincase

Coincase is a clone of the cryptocurrency trading site Coinbase. Coincase allows users to track, buy and sell cryptocurrencies
***LINK***

## Features

Users can sign

## Technologies

* Backend: Rails/ActiveRecord/PostgreSQL
* Frontend: React/Redux
* CoinGecko API: https://www.coingecko.com/api/documentations/v3
* React-chartjs-2: https://github.com/reactchartjs/react-chartjs-2

### Login Page
Before a user logs in, they are shown an index of the top 100 coins, their symbol, current price, daily change, and market capitilization. 

### Homepage
Upon login, users are greeted with charts depicting the performance of the top 6 cryptocurrencies.

### Portfolio
The user is shown the worth of their entire portfolio, as well as the quantity of individual assets owned.

### Prices
In the prices tab, users are able to once again view the top 100 coins and select one to trade, navigating them to the coin's show page.

### Coin Show Page
A coin's show page features a prominent graph of the coin's daily performance. The user can trace over the graph with their mouse revealing the exact price at a given moment in time. The buy/sell box allows them to type in the quantity of that coin they wish to purchase. The total cost of the transaction is updated in realtime. The user's bank balance is shown below. Coincase simulates trading experience by starting users with $25,000 each which allows them to purchase at least one individual coin of any denomination.

### Transactions
Transactions are the key feature of coincase. The rails powered backend compiles the users's transaction history to calculate their total portfolio worth, buying power (bank balance), and individual assets. As coincase is a simulation, each user is 'gifted' $25,000

