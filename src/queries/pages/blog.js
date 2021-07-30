import gql from "graphql-tag";

const BLOGPAGE_QUERY = gql`
    query BlogPage {
        blog {
            title
            description
        }
    }
`;

export default BLOGPAGE_QUERY;