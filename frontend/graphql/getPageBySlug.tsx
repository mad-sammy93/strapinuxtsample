import { gql } from 'graphql-tag'
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
              button {
                title
                link
                size
              }
              quote {
                id
                title
                size
              }
            }
            ... on ComponentListListChef {
              id
              chefs {
                data {
                  id
                  attributes {
                    Name
                    description
                  }
                }
              }
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
            ... on ComponentBlockContact {
              Form
            }
            ... on ComponentBlockImage1440Px {
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
