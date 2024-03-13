const express = require('express');
const{ connecttoMongoDb} = require('./connect');
const{URL} =require('./models/url');
const staticRoute = require('./routes/staticRouter');
const urlRoute = require('./routes/url');
 const path = require('path');

const app = express();

const PORT =8001;

connecttoMongoDb('mongodb+srv://prabalarora2001:4DZlfb5yjMzHEsfy@cluster0.le2kysk.mongodb.net/?appName=MongoDB+Compass')
 .then(() => console.log('mongo connected successfully'));


  app.set("view engine","ejs");
   app.set("views",path.resolve('./views'));

   app.use(express.json());
   app.use(express.urlencoded({extended:false}));


app.use('/url',urlRoute);
app.use('/',staticRoute);

app.get('/url/:shortId',async (req,res) => {
     const shortId = req.params.shortId;
     const entry = await URL.findOneAndUpdate(
       {
         shortId,
       },
       {
         $push: {
           visitHistory: {
             timestamp: Date.now(),
           },
         },
       }
     );
     res.redirect(entry.redirectURL);
})
app.listen(PORT,() => {
     console.log(`Server is running on ${PORT}`);
})