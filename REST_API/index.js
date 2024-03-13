const express = require('express');
const  {connectMongoDb} = require('./conection.js');
 const userRouter = require('./routes/user.js');
 const app = express();
  const PORT = 8000;


//connection 

connectMongoDb('mongodb+srv://prabalarora2001:4DZlfb5yjMzHEsfy@cluster0.le2kysk.mongodb.net/?appName=MongoDB+Compass')
.then(() => console.log('mongodb connected'));


app.use(express.urlencoded({extended:false}));

app.use('/api/users',userRouter);

app.listen(PORT,() => {
    console.log(`Server started on ${PORT}`);
})
