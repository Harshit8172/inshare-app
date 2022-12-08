const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
app.use(express.static('public'));
app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://imharshitshukla:VqKgDGTflvFpfAnY@cluster0.dq060gj.mongodb.net/inshare?retryWrites=true&w=majority',{ 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    }).then(()=>{
          console.log('Database Connected');
    }).catch(err=>{
          console.log('Database not connected' +err);
    });

    // Template engine
    app.set('views', path.join(__dirname, '/views'));
      app.set('view engine', 'ejs');

    // Routes
app.use('/api/files',require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => {

console.log(`Listening on port ${PORT}.`);
});