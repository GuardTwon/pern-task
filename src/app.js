import express from "express";
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req, res) => res.json({message:'Welcome to de API'}))


app.use((err,req, res, net) =>{
    res.status(500).json({
        status:'error',
        message:err.message
    })
})

export default app;