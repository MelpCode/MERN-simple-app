const mongoose = require('mongoose');

URI = process.env.MONGODB_URI

mongoose.connect(URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
    .then(db=>{console.log('Database is connected')})
    .catch(err=>console.log(err))