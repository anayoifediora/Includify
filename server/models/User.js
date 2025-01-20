const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    // password: {
    //     type: String,
    //     required: true,
    //     minLength: 8,
    // },
    phone: {
        type: Number,
        required: true,
        unique: true,
        maxLength: 10,
    },
    birthDate: {
        type: Date,
        get: (date) => {return date.toDateString(date)}
        
    },
    sex: {
        type: String,
        enum: ['Male', 'Female'],
    }

});

const User = model('User', userSchema);

module.exports = User;