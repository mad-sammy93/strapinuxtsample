import { gql } from 'graphql-tag'

export const getPages = gql`
  query getPages ($filters : PageFiltersInput!) {
  pages (filters: $filters) {
    data {
      id
      attributes {
        title
        slug
        blocks {
          ...on ComponentBlocksRichText {
            __typename
            text
          }
          ...on ComponentBlocksSingleImage {
            image {
              data {
                attributes {
                  url
                  name
                }
              }
            }
          }
          ...on ComponentBlocksUsp {
            __typename
            sectionHeading
          }
          ...on ComponentBlocksFoodMakingProcess {
            __typename
            heading
            process {
              title
              description
            }
          }
          ...on ComponentBlocksDishesServedHero {
            __typename
            heroImage{
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            heroHeading
          }
          ...on ComponentBlocksDishesServedOverview {
            __typename
            heading
          }
          ...on ComponentBlocksOurChefs {
            chefHeading
          }
          ...on ComponentBlocksContactHero {
            contactHeroImage{
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            contactHeroHeading
          }
          ...on ComponentBlocksContactBlock {
            heading1
            heading2
          }
        }
      }
    }
  }
}
`