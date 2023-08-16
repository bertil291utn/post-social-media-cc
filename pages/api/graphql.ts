import neo4j from "neo4j-driver";
import { createYoga } from "graphql-yoga";
import { Neo4jGraphQL } from "@neo4j/graphql";

const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env;

const typeDefs = `
type User {
  id: ID!
  avatarURL: String!
  username: String!
  name: String!
  posts: [Post!]! @relationship(type: "POSTED", direction: OUT)
  likedPosts: [Post!]! @relationship(type: "LIKED", direction: OUT)
}

type Post {
  id: ID!
  user: User! @relationship(type: "POSTED", direction: IN)
  timestamp: String!
  description: String!
  media: String
  comments: Int!
  likes: Int!
  isLiked: Boolean!
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