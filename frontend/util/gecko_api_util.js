export const fetchTopCoins = () => (
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'
    })
);

export const fetchTopFourCoins = () =>
  $.ajax({
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false",
  });


export const fetchCoinInfo = (id) => (
    $.ajax({
        url: `https://api.coingecko.com/api/v3/coins/${id}`
    })
)

export const fetchCoinHistoricalData = (id) => {
    return $.ajax({
      url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=90&interval=daily`,
    });
}

