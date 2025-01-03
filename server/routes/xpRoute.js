import express from "express";
import { getXp, patchCodeFields, patchPhases, patchReleaseFields, patchTestFields, postXp } from "../controller/xpController.js";

const router = express.Router();

router.post("/xp", postXp);
router.get("/xp-phase/:projectId", getXp);
router.patch("/update-phase/:id", patchPhases);
router.patch("/update-code-fields/:id", patchCodeFields);
router.patch("/update-test-fileds/:id", patchTestFields);
router.patch("/update-release-fileds/:id", patchReleaseFields);


export default router 

