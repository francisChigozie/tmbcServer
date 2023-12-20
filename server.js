const express = require('express');
const path = require('path');
const cors = require('cors');
//require('dotenv').config();
const dotenv = require('dotenv')
// Load env vars
dotenv.config({path:'./config/config.env'})

const port = process.env.PORT || 5000;

const connectDB = require('./config/db');


connectDB();

const app = express();

//Static Folder
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs');
app.use( express.static( 'views' ) );

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome To The TMBC API' });
});

// cors middleware
app.use(
  cors({
    origin: ['http://localhost:5502', 'https://servertmbc-310782056bbb.herokuapp.com/'],
    credentials: true,
  })
);

const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

const contributorRouter = require('./routes/contributor');
app.use('/api/contributor', contributorRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
