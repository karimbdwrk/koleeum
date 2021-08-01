import gql from "graphql-tag";

const PROPRIETAIRES_PAGE_QUERY = gql`
    query Proprietaires {
        proprietaire {
            title
            description
            page_section {
                id
                title
                description
                image {
                    url
                }
            }
            garanties {
                id
                title
                description
                logos {
                    id
                    title
                    image {
                        url
                    }
                }
            }
            last_section {
                id
                title
                description
                image {
                    url
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

export default PROPRIETAIRES_PAGE_QUERY;