const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();


mongoose.set('strictQuery', false);

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.error(err));
async function main() {
    console.log('Connecting to database...');
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'db_eig_google'
    });
    console.log('Database connected!');
}



//api middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', require('./api/routes'));

//static middleware
app.use(express.static(path.join(__dirname, 'public'))); //Serves resources from public folder

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


var server = app.listen(8080, () => console.log('Server is running on port 8080'));