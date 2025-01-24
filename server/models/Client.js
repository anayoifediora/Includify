const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    phone: {
        type: Number,
        unique: true,
        maxLength: 10,
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'location'
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
    },
    birthDate: {
        type: Date,
        get: (date) => {return date.toDateString(date)}
        
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'appointment',
    }],
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'note',
    }],
    diagnosis: String,
    image: {
        type: String,
        required: false,
        match:[/\.(png|svg|jpg|jpeg|gif)$/],
    },
    nextOfKin: String,
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

clientSchema
    .virtual('fullName')
    .get(function () {
        return `${this.firstName} $${this.lastName}`
    })
    .set(function (names) {
        const first = names.split(' ')[0];
        const last = names.split(' ')[1];
        this.set({ first, last })
    });

const Client = model('Client', clientSchema);

module.exports = Client;