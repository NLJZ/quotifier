const express = require("express");
const router = express.Router();
const dataControllers = require("../controllers/dataControllers");
const { requireAuth, checkUser } = require("../middleware/authMiddleware");

// addSource, updateSource, addQuote, updateQuote
router.post("/addSource", checkUser, dataControllers.addSource);
router.post("/addQuote", checkUser, dataControllers.addQuote);
router.post("/addProject", checkUser, dataControllers.addProject);

router.get("/getSources", checkUser, dataControllers.getSources);
router.get("/getQuotes", checkUser, dataControllers.getQuotes);
router.get("/getProjects", checkUser, dataControllers.getProjects);

router.get("/getSource/:id", checkUser, dataControllers.getOneSource);
router.get("/getQuote/:id", checkUser, dataControllers.getOneQuote);
router.get("/getProject/:id", checkUser, dataControllers.getOneProject);

router.patch("/updateQuote/:id", checkUser, dataControllers.updateQuote);
router.patch("/updateSource/:id", checkUser, dataControllers.updateSource);
router.patch("/updateProject/:id", checkUser, dataControllers.updateProject);

router.delete("/deleteQuote/:id", checkUser, dataControllers.deleteQuote);
router.delete("/deleteSource/:id", checkUser, dataControllers.deleteSource);
router.delete("/deleteProject/:id", checkUser, dataControllers.deleteProject);

module.exports = router;
