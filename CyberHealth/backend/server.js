const dotenv = require('dotenv');

const app = require("./app");

dotenv.config({ path: 'config.env' });

const port = process.env.NODE_PORT || 8080;

const server = app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
