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

export interface AtomQuote extends Schema.Component {
  collectionName: 'components_atom_quotes';
  info: {
    displayName: 'Quote';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    size: Attribute.Enumeration<
      [
        'size_2xl',
        'size_3xl',
        'size_4xl',
        'size_5xl',
        'size_6xl',
        'size_lg',
        'size_md',
        'size_sm',
        'size_xl'
      ]
    >;
  };
}

export interface AtomButton extends Schema.Component {
  collectionName: 'components_atom_buttons';
  info: {
    displayName: 'Button';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    size: Attribute.Enumeration<
      [
        'size_2xl',
        'size_3xl',
        'size_4xl',
        'size_5xl',
        'size_6xl',
        'size_lg',
        'size_md',
        'size_sm',
        'size_xl'
      ]
    >;
  };
}

export interface MoleculesDishCard extends Schema.Component {
  collectionName: 'components_molecules_dish_cards';
  info: {
    displayName: 'DishCard';
    icon: 'restaurant';
  };
  attributes: {
    DishId: Attribute.String;
    size: Attribute.Enumeration<['full', 'half']>;
  };
}

export interface MoleculesChefCard extends Schema.Component {
  collectionName: 'components_molecules_chef_cards';
  info: {
    displayName: 'ChefCard';
    icon: 'emotionHappy';
  };
  attributes: {
    chefId: Attribute.String;
    size: Attribute.Enumeration<['full', 'half']>;
  };
}

export interface MoleculesCard extends Schema.Component {
  collectionName: 'components_molecules_cards';
  info: {
    displayName: 'Card';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlockListChef extends Schema.Component {
  collectionName: 'components_block_list_chefs';
  info: {
    displayName: 'ListChef';
    icon: 'puzzle';
  };
  attributes: {
    chef: Attribute.Component<'molecules.card', true>;
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
    button: Attribute.Component<'atom.button'>;
    quote: Attribute.Component<'atom.quote'>;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'nav.nav-items': NavNavItems;
      'atom.quote': AtomQuote;
      'atom.button': AtomButton;
      'molecules.dish-card': MoleculesDishCard;
      'molecules.chef-card': MoleculesChefCard;
      'molecules.card': MoleculesCard;
      'block.list-chef': BlockListChef;
      'block.hero': BlockHero;
      'block.cta-dishes': BlockCtaDishes;
      'list.list-chef': ListListChef;
    }
  }
}
