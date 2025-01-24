const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema({
    appointmentType: {
        type: String,
        required: true,
        enum: ['GP Appointment', 'Physiotherapy', 'Blood Test', 'Podiatrist', 'Surgery', 'Other'],
    },
    description: {
        type: String,
        required: true,
        maxLength: 300,
        trim: true,
    },
    date: {
        type: Date,
        get: (date) => {return date.toDateString(date)}
    },
    address: {
        type: String,
        required: true,
        maxLength: 70,
    }
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
})

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;