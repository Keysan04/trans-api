import express from "express";
import { getUserTrans } from "../module/transaction/TransModule.js";

import { insertTrans } from "../module/transaction/TransModule.js";
import { userAuth } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", userAuth, async (req, res) => {
  try {
    const transList = await getUserTrans(req.userId);

    res.json({
      status: "success",
      message: "success",
      transList,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", userAuth, async (req, res) => {
  try {
    // insert user
    const result = await insertTrans(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Your transaction have been created",
        })
      : res.json({
          status: "error",
          message: "Unable to create a transaction",
        });
  } catch (error) {
    console.log(error);
  }
});

// router.post("/transaction", async (req, res, next) => {
//   try {
//     const { _userId } = req.body;

//     // check if user exist for the given email
//     const result = await getUserById(_userId);

//     if (result?._userId) {
//       // check if the plain pass and the pass from db, the hashed one, is the same

//       return res.json({
//         status: "success",
//         message: "transaction added  successfully",
//         user: result,
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// });

export default router;
