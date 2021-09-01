import gql from "graphql-tag";

const EVALUATION_PAGE_QUERY = gql`
query Evaluation {
    evaluation {
        title
        description
    }
}
`;

export default EVALUATION_PAGE_QUERY;