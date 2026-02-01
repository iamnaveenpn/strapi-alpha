import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::insight.insight', ({ strapi }) => ({
    async find(ctx) {
        return await strapi.service('api::insight.insight').getInsights(ctx);
    },
    async findOne(ctx) {
        return await strapi.service('api::insight.insight').getInsightBySlug(ctx);
    }
}));
