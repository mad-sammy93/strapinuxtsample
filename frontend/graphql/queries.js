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
export const homepageContent = gql`
  {
    home {
      data {
        attributes {
          title
          slug
          Blocks {
            ... on ComponentBlockList {
              dishes {
                data {
                  attributes {
                    Name
                    description
                  }
                }
              }
            }
            ... on ComponentBlockHero {
              Description
              image {
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
    }
  }
`

export const dishQuery = gql`
  query ($id: ID!) {
    dish(id: $id) {
      data {
        attributes {
          Name
          Description
          Price
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
            ... on ComponentBlockList {
              listName
              chefs {
                data {
                  attributes {
                    Name
                  }
                }
              }
            }
            ... on ComponentBlockHero {
              __typename
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
          }
        }
      }
    }
  }
`