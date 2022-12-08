
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 
    mongoose.connect('mongodb+srv://imharshitshukla:VqKgDGTflvFpfAnY@cluster0.dq060gj.mongodb.net/?retryWrites=true&w=majority'{ 
      useNewUrlParser: true, 
      useCreateIndex:true, 
      useUnifiedTopology: true, 
      useFindAndModify : false 
    }).then(()=>{
          console.log('Database Connected');
    }).catch(err=>{
          console.log('Database not connected' +err);
    });
    }
    




module.exports = connectDB;