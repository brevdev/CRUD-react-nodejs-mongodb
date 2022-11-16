console.log("PROCESS.ENV IS: ", process.env)
const dotenv = require("dotenv")
dotenv.config()

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;
console.log(process.env.DB_USER)
module.exports = {
  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
};
