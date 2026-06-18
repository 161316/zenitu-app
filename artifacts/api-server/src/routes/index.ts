import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import progressRouter from "./progress";
import correctionRouter from "./correction";
import adminRouter from "./admin";
import passwordResetRouter from "./password-reset";
import pushTokenRouter from "./push-token";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/auth", authRouter);
router.use("/auth", passwordResetRouter);
router.use("/progress", progressRouter);
router.use("/correction", correctionRouter);
router.use("/admin", adminRouter);
router.use(pushTokenRouter);

export default router;
