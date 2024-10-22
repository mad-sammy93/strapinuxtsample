import { gql } from 'graphql-tag'
export const getDishDetail = gql`
  query getDishDetail($id: ID!) {
    dish(id: $id) {
      data {
        attributes {
          Name
          created_by_chef {
            data {
              id
              attributes {
                Name
              }
            }
          }
          description
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`
