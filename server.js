const express = require('express');
const path = require('path');
const dotenv = require('dotenv')
// Load env vars
dotenv.config({path:'./config/config.env'})

const port = process.env.PORT || 5000;

const app = express();

//Static Folder
app.use(express.static(path.join(__dirname,'public')))

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Server listening on port ${port}`));

