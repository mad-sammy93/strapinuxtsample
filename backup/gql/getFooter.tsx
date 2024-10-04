import { gql } from "~/.nuxt/imports"; 

export const getFooter = gql`

query getFooter {
  navigation(publicationState: LIVE) {
    __typename
    data {
      attributes {
        navItems {
          title
          url
        }
      }
    }
  }
  
  contactInfo(publicationState: LIVE) {
    __typename
    data {
      attributes {
        heading
        contactInfo {
          icon{
            data {
              attributes{
                url
                alternativeText
              }
            }
          }
          content
        }
      }
    }
  }
  
  openingHour(publicationState: LIVE) {
    __typename
    data {
      attributes {
        heading
        workingDays
        openTimings {
          openHour
          closingHour
        }
      }
    }
  }
}  

`