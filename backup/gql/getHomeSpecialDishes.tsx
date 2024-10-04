import { gql } from "~/.nuxt/imports";


export const getHomeSpecialDishes = gql`
query HomeSpecialDishes($filters:HomeSpecialDishFiltersInput) {
  homeSpecialDishes(filters:$filters) {
    data {
      attributes {
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        title
        description
      }
    }
  }
}
`