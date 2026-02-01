import type { Schema, Struct } from '@strapi/strapi';

export interface CardsInsightCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_insight_cards';
  info: {
    displayName: 'InsightCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.insight-card': CardsInsightCard;
    }
  }
}
