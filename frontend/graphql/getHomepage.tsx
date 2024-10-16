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
              id
              title
              chefs {
                data {
                  id
                  attributes {
                    Name
                    description
                  }
                }
              }
            }
            ... on ComponentBlockCtaDishes {
              id
              title
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
