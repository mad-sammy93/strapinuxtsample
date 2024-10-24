import { gql } from 'graphql-tag'
export const getDishes = gql`
  query getDishes {
    dishes {
      __typename
      data {
        id
        attributes {
          Name
          description
          created_by_chef {
            data {
              id
            }
          }
        }
      }
    }
  }
`
