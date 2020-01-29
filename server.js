const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const thoughtRoutes = require('./Routes')
const mongoose = require('mongoose')
const path = require('path')

dotenv.config()
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true } , (err, success)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Connected to DB`);
    }
})


const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/', thoughtRoutes)


if (process.env.NODE_ENV === 'production'){
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname,'client', 'build', 'index.html' ))
    })
}

app.listen(PORT, ()=> console.log(`Server running at port ${PORT}`))