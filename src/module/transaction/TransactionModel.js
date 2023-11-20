import transactionSchema from "./TransactionSchema.js";

//insert new user
export const insertTransaction = (transObj) => {
  return transactionSchema(transObj).save();
};

//get user by their @_id - string
export const getTransactionByUserId = (_id) => {
  return transactionSchema.findById(_id);
};
