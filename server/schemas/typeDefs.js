const { ApolloServer } = require('@apollo/server');

const typeDefs = `
    type User {
        _id: ID,
        firstName: String,
        lastName: String,
        email: String,
        phone: Int,
        birthDate: String,
        sex: String
    }
    
    type Query {
        users: [User]
    }
`;


module.exports = typeDefs