require("dotenv").config();
const {MongoClient} = require("mongodb");
const client = new MongoClient(process.env.MONGO_URL);

console.log(process.env.MONGO_URL);

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");
}

main()
  .then(() => console.log("Done"))
  .catch((err) => console.error(err))
  .finally(() => client.close());
