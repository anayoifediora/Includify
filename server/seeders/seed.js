const db = require('../config/connection');
const { User, Client, Appointment, Note, Location } = require('../models');
const userSeeds = require('./userSeeds.json');
const appointmentSeeds = require('./appointmentSeeds.json');
const clientSeeds = require('./clientSeeds.json');
const locationSeeds = require('./locationSeeds.json');
const noteSeeds = require('./noteSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Client.deleteMany({});
        await Appointment.deleteMany({});
        await Note.deleteMany({});
        await Location.deleteMany({});

        await User.create(userSeeds);
        await Client.create(clientSeeds);
        await Appointment.create(appointmentSeeds);
        await Note.create(noteSeeds);
        await Location.create(locationSeeds);


        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});