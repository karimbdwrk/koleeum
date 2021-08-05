import gql from "graphql-tag";

const RGPD_PAGE_QUERY = gql`
    query Rgpd {
        rgpd {
            title
            content
        }
    }
`;

export default RGPD_PAGE_QUERY;