import gql from "graphql-tag";

const LEGAL_PAGE_QUERY = gql`
    query Legal {
        legal {
            title
            content
        }
    }
`;

export default LEGAL_PAGE_QUERY;