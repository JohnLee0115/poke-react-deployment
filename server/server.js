const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');

app.use( express.json() );
app.use( express.urlencoded({ etended: true }) );
app.use(cors())

require('./config/mongoose.config');
require('./routes/users.routes')(app); 
app.listen(port, () => console.log(`Listening on port: ${port}`) );