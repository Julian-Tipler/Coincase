export const fetchPortfolio = () => (
    $.ajax({
        url: '/api/users',
    })
);

export const fetchUserDetails = (id) => (
    $.ajax({
        url: `/api/users/${id}`
    })
)