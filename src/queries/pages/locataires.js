import gql from "graphql-tag";

const LOCATAIRES_PAGE_QUERY = gql`
query Locataires {
    locataire {
        title
        description
        cards {
          id
          description
        }
        page_sections {
          id
          title
          description
          image {
            url
          }
        }
        choose_us {
          id
          title
          description
          image {
            url
          }
          card {
            id
            title
            icon {
              url
            }
          }
          button{
            id
            title
            link
          }
        }
        registration {
            id
            title
            description
        }
    }
}
`;

export default LOCATAIRES_PAGE_QUERY;