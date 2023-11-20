import transSchema from "./TransSchema.js";

//insert new user
export const insertTrans = (transObj) => {
  return transSchema(transObj).save();
};

//update transaction --- assignment
//get user by
export const getUserTrans = (userId) => {
  return transactionSchema.find({ userId });
};
