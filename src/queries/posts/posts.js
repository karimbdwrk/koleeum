import gql from "graphql-tag";

const POSTS_QUERY = gql`
    query Posts {
        posts {
            id
            slug
            title
            description
            image {
                url
            }
        }
    }
`;

export default POSTS_QUERY;