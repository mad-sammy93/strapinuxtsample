import { gql } from "~/.nuxt/imports";


export const getChefs = gql `
query getChefs {
  chefs {
    __typename
    data {
      attributes {
        name
        workingWithUs
        dishes{
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`