const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    
    noteType: {
        type: String,
        enum: ['Progress Note', 'GP report', 'Meeting', "Behaviour Observation" ],
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    description: {
        type: String,
        required: true,
        maxLength: 10800,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

const Note = model('Note', noteSchema);

module.exports = Note;