import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: String 
    }
    
    type Query {
        getFriend(id: ID): Friend
    }
    
    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: String
    }
    
    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
    }
    
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema };