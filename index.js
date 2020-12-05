require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
	.then(() => console.log("Connected to Mongodb!"))
	.catch(err => console.log("Mongoose Mongodb Connection Error - ", err));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api', require('./routes'))

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));