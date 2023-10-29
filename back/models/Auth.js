const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Auth = mongoose.model(
  "Auth",
  new Schema(
    {
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      confirmPassword: {
        type: String,
      },
      date: {
        type: Date,
      },
    },
    { timestamps: true }
  )
);

module.exports = Auth;
