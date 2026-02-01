import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::insight.insight', ({ strapi }) => ({
    async getInsights(ctx) {
        const { query } = ctx;

        const [insights, count] = await strapi.db.query('api::insight.insight').findWithCount({
            where: {
                publishedAt: { $notNull: true }
            },
            select: ['id', 'title', 'url', 'slug', 'content'],
            populate: {
                insight_category: {
                    select: ['id', 'title', 'slug'],
                    where: { publishedAt: { $notNull: true } }
                }
            },
            limit: query?.limit ?? 9,
            offset: query?.offset ?? 0,
        });

        return {
            data: insights,
            pagination: {
                limit: query?.limit ?? 9,
                offset: query?.offset ?? 0,
                total: count,
            },
        };
    },

    async getInsightBySlug(ctx) {
        const url = ctx.request.url;




        const slug = url.split('/').pop();

        const insights = await strapi.db.query('api::insight.insight').findOne({
            where: {
                slug: slug,
                publishedAt: { $notNull: true }
            },
            select: ['id', 'title', 'slug', 'url', 'content'],
            populate: {
                insight_category: {
                    select: ['id', 'title', 'slug'],
                    where: { publishedAt: { $notNull: true } }
                }
            },
        });

        return insights;
    }
}));
