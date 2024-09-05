import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionSectionHero extends Schema.Component {
  collectionName: 'components_section_section_heroes';
  info: {
    displayName: 'Section Hero';
    icon: 'apps';
  };
  attributes: {
    quote: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttonLink: Attribute.String;
    buttonText: Attribute.String;
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
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.section-hero': SectionSectionHero;
    }
  }
}
