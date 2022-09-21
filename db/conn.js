const mongoose = require('mongoose');
const DB = 'mongodb+srv://mokrus:Mydreamistoearn$$1@cluster0.4faag.mongodb.net/portfolio?retryWrites=true&w=majority';
mongoose.connect(DB,{
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
   useFindAndModify: false
}).then(()=>{
   console.log("connection Succesfull");
}).catch((err) => console.log(`no connection`));
