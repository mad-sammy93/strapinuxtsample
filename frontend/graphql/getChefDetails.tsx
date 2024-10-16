import { gql } from 'graphql-tag'
export const getChefDetails = gql`
  query getChefDetails($id: ID!) {
    chef(id: $id) {
      __typename
      data {
        __typename
        attributes {
          Name
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
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
`
