import 'dotenv/config';
import express from 'express';
import authRouter from './router/auth-router.js';
import contactRouter from './router/contact-router.js'
import connectdb from './utils/db.js'
import cors from 'cors'

import errorMiddleware from './middlewares/error-middleware.js';

const app = express();

//cors

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH ,HEAD",
    credential:true
}

app.use(cors(corsOptions))

app.use(express.json())



//api
 
app.use('/api/auth', authRouter);
app.use('/api/form',contactRouter);



app.use(errorMiddleware);

const PORT = 8000;
 connectdb().then(() => {
     app.listen(PORT, () => {
         console.log(`server is started on port ${PORT}`);
     });
 });
