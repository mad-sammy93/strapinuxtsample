import gql from 'graphql-tag'

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
export const chefsQuery = gql`
  query {
    chefs {
      data {
        attributes {
          Name
          description
          dishes {
            data {
              attributes {
                Name
                description
              }
            }
          }
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

export const homepageContent = gql`{
  homepage {
    data {
      attributes {
        blocks {
          __typename
          ... on ComponentBlockHero {
            Description
            buttonText
            buttonLink
            quoteSize
            buttonSize
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ... on ComponentListListChef {
            chefs {
              data {
                attributes {
                  Name
                  description
                  
                }
              }
            }
          }
          ... on ComponentBlockCtaDishes {
            dishes{
              data{
                attributes{
                  Name
                  description
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export const dishQuery = gql`
  query ($id: ID!) {
    dish(id: $id) {
      data {
        attributes {
          Name
          created_by_chef {
            data {
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

export const navigationQuery = gql`
  query {
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

export const getPageBySlugQuery = gql`
  query getPageBySlug($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          slug
          PageBlock {
            __typename
            ... on ComponentBlockHero {
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              Description
              buttonText
              buttonLink
              buttonSize
              quoteSize
            }
            ... on ComponentBlockCtaDishes {
              title
              dishes {
                data {
                  id
                  attributes {
                    Name
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`