import { gql } from 'graphql-tag'
export const homepageContent = gql`
  query homepageContent {
    homepage {
      data {
        attributes {
          blocks {
            __typename
            ... on ComponentBlockHero {
              Description
              button {
                title
                link
                size
              }
              quote {
                id
                title
                size
              }
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            ... on ComponentListListChef {
              chefs {
                data {
                  attributes {
                    Name
                    description
                  }
                }
              }
            }
            ... on ComponentBlockCtaDishes {
              dishes {
                data {
                  attributes {
                    Name
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
