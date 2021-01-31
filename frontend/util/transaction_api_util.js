export const createTransaction = transaction => (
    $.ajax({
        method: 'POST',
        url: '/api/transactions',
        data: { transaction }
    })
);

export const fetchTransactions = () => (
    $.ajax({
        method: 'GET',
        url: '/api/transactions',
    })
)