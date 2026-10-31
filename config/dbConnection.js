
const mongoose =require("mongoose");

async function Db_connection() {
  await  mongoose.connect(process.env.MONGO_URI)
               .then(()=> {
                    console.log('Connected to the database ')
                }).catch( (err) => {
                        console.error(`Error connecting to the database. n${err}`);
                })
}


module.exports = Db_connection;
