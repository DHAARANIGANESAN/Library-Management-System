const express = require("express");
const app = express();
const rootRoute = require("./routes/rootRoute");
const url = "mongodb://localhost:27017";
const mongoose=require("mongoose")

app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });

app.use("/api/v1", rootRoute);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
