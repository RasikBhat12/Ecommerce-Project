import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";                    // .js
import authRoutes from './routes/authRoute.js';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js'

// config env for loading from process to .env
dotenv.config();


// database config
connectDB();


// rest object
const app = express()

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


// rest api
app.get('/', (req,res) =>{
    res.send("<h1>Welcome to Ecommerce App</h1>")
    
})

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server Running on mode ${process.env.DEV_MODE} and on port ${PORT}`.bgCyan.white);
});