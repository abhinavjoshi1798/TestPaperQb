const connection = require("../db");

const dashboardData = async (req, res) => {
  try {
    // Execute SQL query
    connection.query(
      "SELECT * FROM center_info;",
      function (error, results, fields) {
        if (error) {
          console.error("Error executing query: " + error.stack);
          res.status(500).send({ error: "Internal server error" });
          return;
        }

        // Process 'results' here
        console.log("Query results:", results);

        // Send response
        res.send({ centers: results });
      }
    );
  } catch (err) {
    console.error("Error in dashboardData:", err);
    res.status(500).send({ error: "Internal server error" });
  }
};

const testPaperDetails = async (req, res) => {
  const { paperCode } = req.body;
  try {
    if (!paperCode) {
      return res
        .status(400)
        .send({ msg: "Paper Code is required in request body" });
    }

    connection.query(
      "SELECT * FROM paper_info WHERE paper_code = ?",
      [paperCode], // Pass paperCode as a parameter
      function (error, results, fields) {
        if (error) {
          console.error("Error executing query: " + error.stack);
          res.status(500).send({ error: "Internal server error" });
          return;
        }

        // Process 'results' here
        console.log("Query results:", results);

        // Send response
        res.send({ paperDetails: results });
      }
    );
  } catch (err) {
    console.error("Error in testPaperDetails:", err);
    res.status(500).send({ error: "Internal server error" });
  }
};

const testPaperUpload = async (req, res) => {
  try {
    res.status(200).send({msg:"Files uploaded successfully"});
  } catch (err) {
    console.error("Error in testPaperUpload:", err);
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports = {
  dashboardData,
  testPaperDetails,
  testPaperUpload,
};
