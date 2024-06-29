const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');

dotenv.config();

async function authHandler(req, res) {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });

    const payload = ticket.getPayload();

    // create session & return info
    console.log(payload)
    res.status(200);
}

const app = express();
const port = 3000;
const client = new OAuth2Client();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HopeKCC Auth Test API");
});

app.get("/config", (req, res) => {
    res.status(200).json({clientid: process.env.CLIENT_ID});
});

app.get("/auth", authHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});