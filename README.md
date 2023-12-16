<h1 align="center">Coincase</h1>

<a href='https://www.coincase-juliantipler.com/#/'>Coincase</a> is a clone of the cryptocurrency trading site Coinbase. Coincase allows users to track, buy and sell cryptocurrencies.

## Table of Contents

- [Technologies](#technologies)
- [Features](#Features)

## Technologies
* ![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
* ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)
* CoinGecko API: https://www.coingecko.com/api/documentations/v3

<img src="https://media.giphy.com/media/rfEGD0tuYwjCmFqZLX/giphy.gif" width="800">

## Features

### Homepage
Upon login, users are greeted with charts depicting the performance of the top 6 cryptocurrencies.

<img src="https://media.giphy.com/media/BReM60ipFoDf6U3Gan/giphy.gif" width="800">

### Portfolio
The user is shown the worth of their entire portfolio, as well as the quantity of individual assets owned. Most items on Coincase are clickable, including the user's current assets, linking to that coin's show page. They are also shown their ten most recent transactions.

<img src="https://media.giphy.com/media/ZTEBkK2l5meRrrUnEf/giphy.gif" width="800">

### Prices
In the prices tab, users are able to once again view the top 100 coins and select one to trade, navigating them to the coin's show page. The user can sort the table alphabetically, by price, by price change, or by market capitilization (default).

### Coin Show Page
A coin's show page features a prominent graph of the coin's daily performance. The user can trace over the graph with their mouse revealing the exact price at a given moment in time. The buy/sell box allows them to type in the quantity of that coin they wish to purchase. The total cost of the transaction is updated in realtime. The user's bank balance is shown as well.

### Transactions
Transactions are the key feature of Coincase. The rails powered backend compiles the users's transaction history to calculate their total portfolio worth, bank balance in usd, and current assets. As Coincase is a simulation, each user is 'gifted' $25,000 to start with (which used to be just enough to buy one bitcoin. Not anymore!).

### Deployment
Deploy main branch through Heroku UI. Use buildpack Heroku-20 with Node.js, Ruby (in that order)
