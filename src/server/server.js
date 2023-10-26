import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bcrypt from "bcryptjs";
import { createConnection } from "mysql2";
import cors from "cors";
import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";

const app = express();

// MIDDLE WARE
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "1512x1512", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

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
  port: dbPort,
});

db.connect((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("DB CONNECTED");
  }
});

const User = {
  findByEmail: function (email, callback) {
    db.query(
      "SELECT * FROM blog_users WHERE email = ?",
      email,
      (err, results) => {
        if (err) return callback(err, null);
        if (results.length === 0) return callback(null, null);
        return callback(null, results[0]);
      }
    );
  },
  findById: function (email, callback) {
    db.query("SELECT * FROM blog_users WHERE id = ?", email, (err, results) => {
      if (err) return callback(err, null);
      if (results.length === 0) return callback(null, null);
      return callback(null, results[0]);
    });
  },
};

// PASSPORT THINGS
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }


// LOCAL STRATEGY CONFIG
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findByEmail(email, (err, user) => {
      if (err) return done(err);

      if (!user) {
        return done(null, false, { message: "Incorrect email." });
      }

      if (!bcrypt.compare(password, user.password)) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
    });
  })
);

// LOGIN AND SIGNUP
app.post("/api/login", async (req, res, next) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM blog_users WHERE email = ?",
    email,
    (err, results) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Incorrect email or password" });
      }

      const user = results[0];

      bcrypt.compare(password, user.password_hash, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err);
          return res.status(500).json({ message: "Internal server error" });
        }
        if (result) {
            console.log('All is good!')
            passport.authenticate("local", {
            successRedirect: "/userHome",
            failureRedirect: "/login",
            failureFlash: true,
          });
        } else {
          console.log("Wrong password!");
        }
      });
    }
  );
});

app.post("/api/register", async (req, res) => {
  try {
    if (!req.body.password) {
      return res.status(400).json({ message: "Password is required!" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userName = req.body.username;
    const userEmail = req.body.email;
    const sql = `INSERT INTO blog_users(username, email, password_hash) VALUES ('${userName}', '${userEmail}', '${hashedPassword}')`;

    db.query(sql, (err, result) => {
      if (err) {
        console.error("ERROR: ", err.message);
        res.status(500).send("Error");
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.get('/userHome', isLoggedIn, (req, res) => {
    
  });

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
