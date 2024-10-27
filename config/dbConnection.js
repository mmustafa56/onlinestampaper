
const mongoose =require("mongoose");

async function Db_connection() {
  await  mongoose.connect(`mongodb+srv://mustafa1:mustafa1@realexample.frcboi4.mongodb.net/?retryWrites=true&w=majority&appName=RealExample`)
               .then(()=> {
                    console.log('Connected to the database ')
                }).catch( (err) => {
                        console.error(`Error connecting to the database. n${err}`);
                })
}


module.exports = Db_connection;