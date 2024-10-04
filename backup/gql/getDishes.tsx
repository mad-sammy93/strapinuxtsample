import { gql } from "~/.nuxt/imports";


export const getDishes = gql`
query getDishes($filters:DishFiltersInput) {
  dishes(filters:$filters) {
    __typename
    data {
      id
      attributes {
        dishImage {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        name
        ingredients
      }
    }
  }
}
`