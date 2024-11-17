import gql from 'graphql-tag';

export const CREATE_ENTITY = gql`
  mutation CreateEntity($input: CreateEntityInput) {
    createEntity(input: $input) {
      name
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

export const UPDATE_ENTITY = gql`
  mutation updateEntity($input: UpdateEntityInput) {
    updateEntity(input: $input) {
      id
      name
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
