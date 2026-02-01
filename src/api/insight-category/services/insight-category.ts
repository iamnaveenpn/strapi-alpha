import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::insight-category.insight-category', ({ strapi }) => ({
    async getCategories() {
        const categories = await strapi.db.query('api::insight-category.insight-category').findMany({
            where: {
                publishedAt: { $notNull: true }
            },
            select: ['id', 'title', 'slug'],
        });
        return categories;
    }
}));
