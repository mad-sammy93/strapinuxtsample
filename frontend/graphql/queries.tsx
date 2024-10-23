import { gql } from 'graphql-tag'
export const getChefsQuery = gql`
  query getChefs {
    chefs {
      data {
        id
        attributes {
          Name
          description
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          dishes {
            data {
              id
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
`
