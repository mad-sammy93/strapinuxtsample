import { gql } from 'graphql-tag'

export const getNavItems = gql`
  query navigationQuery {
    navigation {
      data {
        attributes {
          navitems {
            id
            name
            slug
            path
            is_external
            page {
              data {
                attributes {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
`
