import express from "express";
import {
  getUserByEmail,
  getUserById,
  insertUser,
} from "../module/user/UserModule.js";
import { comparePassword, hashPassword } from "../utils/bcryptHelper.js";
import { insertTransaction } from "../module/transaction/TransactionModel.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "to be completed get",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // insert user
    const result = await insertTransaction(req.body);
    console.log(result);
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
    next(error);
  }
});

router.post("/transaction", async (req, res, next) => {
  try {
    const { _userId } = req.body;

    // check if user exist for the given email
    const result = await getUserById(_userId);

    if (result?._userId) {
      // check if the plain pass and the pass from db, the hashed one, is the same

      return res.json({
        status: "success",
        message: "transaction added  successfully",
        user: result,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
