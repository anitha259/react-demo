const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();


const port = 9825;
const hostname = 'localhost';


const locID = 'mongodb://127.0.0.1:27017/zomato_re';
const serverDB = 'mongodb+srv://zomato_res:anitha2591998@cluster0.oijcg.mongodb.net/zomato_re?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());
app.use('/', router);


mongoose.connect(serverDB,
  {useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => {
    app.listen(port, hostname, () => {
     console.log(`Server is running at ${hostname}:${port}`);
   })
})
.catch(err => console.log(err));