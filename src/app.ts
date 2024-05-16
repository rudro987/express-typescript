import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from Tanvir's server");
});



export default app;