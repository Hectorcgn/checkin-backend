//Imports
import "dotenv/config";
import express from "express";
import multer from "multer";
import cors from "cors";

//Variable
const PORT = process.env.PORT;
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//multer
const uploade = multer();

//get-route
//post-route
//server start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
