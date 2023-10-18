import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bcrypt from 'bcryptjs';
import { createConnection } from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const serverPort = process.env.SERVER_PORT;

// DATABASE 
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbDatabase = process.env.DB_DB;
const dbPort = process.env.DB_PORT;

const db = createConnection({
    host: dbHost,
    user: dbUser,  
    password: dbPass,
    database: dbDatabase,
    port: dbPort
});

db.connect((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("DB CONNECTED");
    }
});




// CREATING A USER
app.post('/ api/login', (req, res) => {
    console.log("Login");
})

app.post('/api/register', async (req, res) => {
    try {
        if (!req.body.password) {
            return res.status(400).json({ message: 'Password is required!' })
        }

        const hashedPassword = bcrypt.hash(req.body.password, 10);
        console.log("Success!")

    } catch (error) {
        res.status(500).json({ message: 'Error during registration!' })
    }
});


app.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`)
});