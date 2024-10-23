import { gql } from 'graphql-tag'
export const getWebsiteInfo = gql`
  query getWebsiteInfo {
    websiteInfo {
      data {
        attributes {
          Site_name
          site_logo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
