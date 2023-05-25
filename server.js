const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const URIData = process.env.MONGO_URI;
