const { ApolloServer } = require('@apollo/server');

const typeDefs = `
    type User {
        _id: ID,
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        phone: Int,
        birthDate: String,
        gender: String,
        address: String,
        clients: [Client],
        locations: [Location],
        role: String
    }
    type Client {
        _id: ID,
        firstName: String,
        lastName: String,
        email: String,
        phone: Int,
        address: String,
        gender: String,
        birthDate: String,
        appointment: [Appointment],
        notes: [Note],
        diagnosis: String,
        image: String,
        nextOfKin: String,
    }
    type Location {
        _id: ID,
        name: String,
        address: String,
        manager: User
    }
    type Note {
        _id: ID,
        noteType: String,
        title: String,
        description: String,
        createdAt: String,
    }
    type Appointment {
        _id: ID,
        appointmentType: String,
        description: String,
        date: String,
        address: String,
    }

    
    type Query {
        users: [User]
    }
`;


module.exports = typeDefs