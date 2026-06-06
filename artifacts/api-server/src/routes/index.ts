import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import progressRouter from "./progress";
import correctionRouter from "./correction";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/auth", authRouter);
router.use("/progress", progressRouter);
router.use("/correction", correctionRouter);

export default router;
