// /*
// USER
// UserId PK
// can have many posts
// user can have many liked posts


// POST
// postId PK
// can have just one user

// LIKEDPOST
// likedPostId PK
// postId FK
// userId FK



// */


// type User {
//   id: ID!
//   avatarURL: String!
//   username: String!
//   name: String!
//   posts: [Post!]!
//   likedPosts: [Post!]!
// }

// type Post {
//   id: ID!
//   user: User!
//   timestamp: String!
//   description: String!
//   media: String
//   comments: Int!
//   likes: Int!
//   isLiked: Boolean!
// }

// type Query {
//   getUser(id: ID!): User
//   getPost(id: ID!): Post
// }

// type Mutation {
//   createUser(input: CreateUserInput!): User
//   createPost(input: CreatePostInput!): Post
//   likePost(userId: ID!, postId: ID!): Post
// }

// input CreateUserInput {
//   avatarURL: String!
//   username: String!
//   name: String!
// }

// input CreatePostInput {
//   userId: ID!
//   timestamp: String!
//   description: String!
//   media: String
//   comments: Int!
//   likes: Int!
//   isLiked: Boolean!
// }
import neo4j from "neo4j-driver";
import { createYoga } from "graphql-yoga";
import { Neo4jGraphQL } from "@neo4j/graphql";

const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env;

const typeDefs = `
  type Movie {
    title: String!
    plot: String
    poster: String
    imdbRating: Float
    actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
    genres: [Genre!]! @relationship(type: "IN_GENRE", direction: OUT)
  }

  type Genre {
    name: String!
    movies: [Movie!]! @relationship(type: "IN_GENRE", direction: IN)
  }

  type Actor {
    name: String
  }
`;

// Create a Neo4j driver instance to connect to Neo4j AuraDB
const driver = neo4j.driver(
  NEO4J_URI as string,
  neo4j.auth.basic(NEO4J_USERNAME as string, NEO4J_PASSWORD as string)
);

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
});

const initServer = async () => {
  console.log("Building GraphQL server");
  return await neoSchema.getSchema();
};

export default createYoga({
  schema: await initServer(),
  graphqlEndpoint: "/api/graphql",
});