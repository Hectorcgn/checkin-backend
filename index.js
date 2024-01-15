//Imports
import "dotenv/config";
import express from "express";
import multer from "multer";
import cors from "cors";
import { router as authRouter } from "./routes/auth.js";
import { router as usersRouter } from "./routes/users.js";
//Variable
const PORT = process.env.PORT;
const app = express();

//multer
const upload = multer();

app.use(cors());
app.use(express.json());

app.use("/api/auth", upload.none(), authRouter);
app.use("/api/users", upload.none(), usersRouter);
//server start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
