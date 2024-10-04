import { gql } from "~/.nuxt/imports";

export const getDishCategories = gql `
query getDishCategories {
  dishesCategories {
    data {
      id
      attributes {
        name
      }
    }
  }
}
`