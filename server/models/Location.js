const { Schema, model } = require('mongoose');

const locationSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    address: {
        street: {
            type: String,
            required: true,
            maxLength: 30,
        },
        suburb: {
            type: String,
            required: true,
            maxLength: 30,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
            maxLength: 20
        },
        postCode: {
            type: String,
            required: true,
            maxLength: 10,
        }
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});


const Location = model('Location', locationSchema);

module.exports = Location;