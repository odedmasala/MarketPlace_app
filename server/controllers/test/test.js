const testAPI = (req, res) =>
  res.status(200).json("The server is up and running");

module.exports = { testAPI };
