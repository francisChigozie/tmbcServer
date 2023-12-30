const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser')
//require('dotenv').config();
const dotenv = require('dotenv')
// Load env vars
dotenv.config({path:'./config/config.env'})

const port = process.env.PORT || 5000;

const connectDB = require('./config/db');


connectDB();

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

//Static Folder
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs');
app.use( express.static( 'views' ) );


//app.set('views'(path.join(__dirname,'views')))


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome To The TMBC API' });
});

// cors middleware
app.use(
  cors({
    origin: ['https://www.tmbc-ng.com/'],
    credentials: true,
  })
);

const contactRouter = require('./routes/contact');
app.use('/api/contact', contactRouter);

const contributorRouter = require('./routes/contributor');
app.use('/api/contributor', contributorRouter);

const editorRouter = require('./routes/editor');
app.use('/api/editor', editorRouter);

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);



app.listen(port, () => console.log(`Server listening on port ${port}`));
