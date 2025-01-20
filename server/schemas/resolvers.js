const { ApolloServer } = require('@apollo/server');

const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find();
        }
    }
}

module.exports = resolvers;