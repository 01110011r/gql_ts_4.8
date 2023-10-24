import { makeExecutableSchema } from "@graphql-tools/schema";
import user from "./user"
import category from "./category";

export const schema=makeExecutableSchema({
    typeDefs:[user.td, category.td],
    resolvers:[user.resolvers, category.resolvers]
})