const express = require('express');
var cors = require('cors');
const app = express();

const { config } = require('./config/index');
const vacunasApi = require('./routes/vacunas');
// const corsOptions = { origin: "http://example.com" };
//body-parser;
app.use(express.json());
app.use(cors());

vacunasApi(app);


app.listen(config.port, function() {
   console.log(`Listening http://localhost:${config.port}`);
});