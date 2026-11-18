const app = require("./app");

const PORT = 8080;
const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:8080");
    });
  } catch (error) {
    console.log("Error Connecting Server");
  }
};

startServer();
