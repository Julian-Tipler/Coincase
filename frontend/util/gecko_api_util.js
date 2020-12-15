export const fetchTopCoins = () => (
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    })
);

export const fetchCoinInfo = (id) => (
    $.ajax({
        url: `https://api.coingecko.com/api/v3/coins/${id}`
    })
)

export const fetchCoinHistoricalData = (id) => (
    $.ajax({
        url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=minutely`
    })
)

