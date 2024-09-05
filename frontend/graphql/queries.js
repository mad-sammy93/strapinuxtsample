import gql from 'graphql-tag'

// export const allProductsQuery = gql`
//   query {
//     products {
//       data {
//         id
//         attributes {
//           Title
//         }
//       }
//     }
//   }
// `

// export const singleArticleQuery = gql`
//   query singleArticleQuery {
//     page(id: $id) {
//       data {
//         attributes {
//           title
//           publishedAt
//         }
//       }
//     }
//   }
// `

export const chefQuery = gql`
  query {
    chef(id: 1) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`
export const siteName = gql`
  query {
    websiteInfo {
      data {
        attributes {
          Site_name
          Site_description
        }
      }
    }
  }
`
export const homepageContent = gql`
  {
    home {
      data {
        attributes {
          Section {
            id
            image {
              data {
                attributes {
                  url
                }
              }
            }
            quote
            buttonLink
            buttonText
          }
        }
      }
    }
  }
`