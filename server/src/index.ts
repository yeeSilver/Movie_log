//server entry file
import "reflect-metadata";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import http from "http";

async function main() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs: gql`
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => "hello world",
      },
    },
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || 400, () => {
    if (process.env.NODE_ENV != "produnction") {
      console.log(`
      server started on => http://localhost:4000
      graphql playground => http://localhost:4000/graphql`);
    } else {
      console.log(`Production server Started...`);
    }
  });
}

main().catch((err) => console.log(err));
