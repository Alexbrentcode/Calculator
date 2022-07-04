const express = require('express');
const mathRoute = require("./routes/math");
const cors = require("cors");
 const app = express();

 const PORT = 5000;
 
 app.use(express.json())
 app.use(cors());

 app.get('/', (req, res) => {
    console.log("Response from server")
    res.send("Testing the output")
 })

 app.listen(PORT, () => {
    console.log(`Server currently listening on PORT ${PORT}`)
 })

 app.use("/math", mathRoute)