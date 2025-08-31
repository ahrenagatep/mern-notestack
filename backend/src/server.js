import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(cors({
    origin:"http://localhost:5173",
})
);

app.use(express.json()) // parses JSON bodies: req.body
app.use(rateLimiter);

// custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// })

// endpoints (url + http to allow the client to interact with a specific resource)
// prefixed endpoints with /api/notes
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
})


