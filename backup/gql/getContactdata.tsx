import { gql } from "~/.nuxt/imports";

export const getContactData = gql `
query getContactData {
contactInfo(publicationState: LIVE) {
    __typename
    data {
      attributes {
        heading
        contactInfo {
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