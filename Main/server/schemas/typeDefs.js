// TO DO - REVIEW AND REMOVE 

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Food {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    food1: String!
    food2: String!
    food1_votes: Int
    food2_votes: Int
  }

  type Query {
    food: [Food]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(food1: String!, food2: String!): Matchup
    createVote(_id: String!, foodNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
