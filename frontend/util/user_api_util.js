export const fetchPortfolio = () => (
    $.ajax({
        url: '/api/users',
    })
);
