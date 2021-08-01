import gql from "graphql-tag";

const ABOUT_PAGE_QUERY = gql`
query AboutUS {
    aboutUs {
        title
        text_content {
          text
        }
        image {
          url
        }
      	telephone
      	email
        registration {
            id
            title
            description
        }
    }
}
`;

export default ABOUT_PAGE_QUERY;