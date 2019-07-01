const express = require("express");
const router = express.Router();

// @route    GET   api/users/test
// @desc     Test users route
// @access   Private
router.get("/test", (req, res) => {
  res.json({ msg: "Post route works" });
});

module.exports = router;
