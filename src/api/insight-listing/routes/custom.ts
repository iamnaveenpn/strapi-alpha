export default {
    routes: [
        {
            method: 'GET',
            path: '/insight-listing/:id',
            handler: 'insight-listing.getInsightByCategory',
            config: {
                auth: false,
            },
        },
    ],
};
