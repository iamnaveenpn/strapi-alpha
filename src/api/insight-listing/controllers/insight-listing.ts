import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::insight-listing.insight-listing', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.db.query('api::insight-listing.insight-listing').findOne({
            where: {
                publishedAt: { $notNull: true }
            },
            select: ['id', 'title']
        })
    },
    async getInsightByCategory(ctx) {
        const id = ctx?.params?.id;

        const insightListing = await strapi.db.query('api::insight-category.insight-category').findOne({
            where: {
                publishedAt: { $notNull: true },
                slug: id.toLowerCase()
            },
            select: ['id', 'title', 'slug'],
            populate: {
                insights: {
                    select: ['id', 'title', 'slug', 'url', 'content'],
                    where: { publishedAt: { $notNull: true } },
                    populate: {
                        image: true
                    }
                }
            }
        });

        return insightListing;
    }
}));
