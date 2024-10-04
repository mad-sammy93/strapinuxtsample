import type { Schema, Attribute } from '@strapi/strapi';

export interface NavNavItems extends Schema.Component {
  collectionName: 'components_nav_nav_items';
  info: {
    displayName: 'NavItems';
    icon: 'filter';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
    is_external: Attribute.Boolean & Attribute.DefaultTo<false>;
    page: Attribute.Relation<'nav.nav-items', 'oneToOne', 'api::page.page'>;
  };
}

export interface ListListChef extends Schema.Component {
  collectionName: 'components_list_list_chefs';
  info: {
    displayName: 'ListChef';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    chefs: Attribute.Relation<'list.list-chef', 'oneToMany', 'api::chef.chef'>;
  };
}

export interface BlockHero extends Schema.Component {
  collectionName: 'components_block_heroes';
  info: {
    displayName: 'Hero';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    Description: Attribute.Text;
    buttonText: Attribute.String;
    buttonLink: Attribute.String;
    quoteSize: Attribute.Enumeration<
      [
        'size_sm',
        'size_md',
        'size_lg',
        'size_xl',
        'size_2xl',
        'size_3xl',
        'size_4xl',
        'size_5xl',
        'size_6xl'
      ]
    >;
    buttonSize: Attribute.Enumeration<
      [
        'size_sm',
        'size_md',
        'size_lg',
        'size_xl',
        'size_2xl',
        'size_3xl',
        'size_4xl',
        'size_5xl',
        'size_6xl'
      ]
    >;
  };
}

export interface BlockCtaDishes extends Schema.Component {
  collectionName: 'components_block_cta_dishes';
  info: {
    displayName: 'CTA_dishes';
    icon: 'chartBubble';
  };
  attributes: {
    title: Attribute.String;
    dishes: Attribute.Relation<
      'block.cta-dishes',
      'oneToMany',
      'api::dish.dish'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'nav.nav-items': NavNavItems;
      'list.list-chef': ListListChef;
      'block.hero': BlockHero;
      'block.cta-dishes': BlockCtaDishes;
    }
  }
}
