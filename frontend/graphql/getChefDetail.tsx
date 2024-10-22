import { gql } from 'graphql-tag'
export const getChefDetail = gql`
  query getChefDetail($id: ID!) {
    chef(id: $id) {
      __typename
      data {
        id
        attributes {
          __typename
          Name
          description
          image {
            data {
              attributes {
                alternativeText
                url
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
