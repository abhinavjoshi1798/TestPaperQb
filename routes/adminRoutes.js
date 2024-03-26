const express = require("express");
const {
  dashboardData,
  testPaperDetails,
  testPaperUpload,
} = require("../controllers/adminController");

const multer = require("multer");
const path = require("path");

const adminRouter = express.Router();

//-------------------------------------- File Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
//--------------------------------------

adminRouter.get("/dashboard", dashboardData);

adminRouter.post("/paperdetails", testPaperDetails);

// Using multer to handle multiple file uploads
adminRouter.post("/paperupload", upload.array("pdfFiles", 5), testPaperUpload);

// Serve the uploaded files statically
adminRouter.use("/uploads", express.static(path.join(__dirname, "uploads")));

module.exports = {
  adminRouter,
};
