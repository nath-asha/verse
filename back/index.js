import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
require('dotenv').config

const app = express();
app.use(cors());
app.use(json());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))