import { gql } from '@apollo/client';

export const GET_ENTITIES = gql`
  query Query {
    getEntities {
      ... on Contact {
        id
        name
        email
        phone
      }
      ... on Company {
        id
        name
        industry
        contactEmail
      }
    }
  }
`;
