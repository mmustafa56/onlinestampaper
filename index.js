const express = require('express');
const cors = require('cors');
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 9000;

mongoose.connect(`mongodb+srv://mustafa1:mustafa1@realexample.frcboi4.mongodb.net/test?retryWrites=true&w=majority`)
               .then(()=> {
                    console.log('Connected to the database ')
                }).catch( (err) => {
                        console.error(`Error connecting to the database. n${err}`);
                })
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin:'*'
}));

app.use("/api/admin",require('./routes/admin'));
app.use("/api/user",require('./routes/User'));
app.listen(PORT,()=>{
    console.log('App is running on port '+PORT)
})