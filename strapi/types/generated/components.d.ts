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

export interface BlockImage1440Px extends Schema.Component {
  collectionName: 'components_block_image_1440pxes';
  info: {
    displayName: 'Image-1440px';
    icon: 'apps';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface BlockContact extends Schema.Component {
  collectionName: 'components_block_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    Form: Attribute.Blocks & Attribute.Required;
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

export interface MenuTitle extends Schema.Component {
  collectionName: 'components_menu_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    sections: Attribute.Relation<
      'menu.title',
      'oneToMany',
      'api::section.section'
    >;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface MenuMenuButton extends Schema.Component {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'MenuButton';
    icon: 'filter';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    type: Attribute.Enumeration<['Primary', 'Secondary']>;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    description: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String;
    sections: Attribute.Relation<
      'menu.dropdown',
      'oneToMany',
      'api::section.section'
    >;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'nav.nav-items': NavNavItems;
      'list.list-chef': ListListChef;
      'block.list-chef': BlockListChef;
      'block.image-1440px': BlockImage1440Px;
      'block.hero': BlockHero;
      'block.cta-dishes': BlockCtaDishes;
      'block.contact': BlockContact;
      'molecules.dish-card': MoleculesDishCard;
      'molecules.chef-card': MoleculesChefCard;
      'molecules.card': MoleculesCard;
      'menu.title': MenuTitle;
      'menu.menu-link': MenuMenuLink;
      'menu.menu-button': MenuMenuButton;
      'menu.link': MenuLink;
      'menu.dropdown': MenuDropdown;
      'atom.quote': AtomQuote;
      'atom.button': AtomButton;
    }
  }
}
