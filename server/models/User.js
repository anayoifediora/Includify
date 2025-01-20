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
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
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
    },
    address: {
        type: String,
        required: true,
    },
    supervisor: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    clients: [{
        type: Schema.Types.ObjectId,
        ref: 'client',
    }],
    locations: [location],

},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

//Set up pre-save middleware to hash the password before it's created
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }

    next();
})

//Compare incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;