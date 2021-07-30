import gql from "graphql-tag";

const POST_QUERY = gql`
    query Post($slug: String!){
        posts(where: {slug: $slug}) {
            id
            slug
            title
            description
            content
            image {
                url
            }
        }
    }
`;

export default POST_QUERY;