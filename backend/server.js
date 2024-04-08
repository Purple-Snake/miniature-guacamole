const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})

mongoose.connect(process.env.Mongo_Uri).then(() => console.log("Connected to database")).catch((error) => console.log(error))