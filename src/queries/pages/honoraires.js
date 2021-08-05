import gql from "graphql-tag";

const HONORAIRES_PAGE_QUERY = gql`
    query Honoraires {
        honoraire {
            title
            content
        }
    }
`;

export default HONORAIRES_PAGE_QUERY;