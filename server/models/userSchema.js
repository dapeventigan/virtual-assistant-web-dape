const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  pdfFile: String,
  fname: String,
  lname: String,
  mname: String,
  mobileNumber: String,
  streetAdd: String,
  cityName: String,
  stateName: String,
  zipCode: String,
  email: String,
  password: String,
  selectedValues: Object,
  role: String,
  verified: { type: Boolean, default: false },
});

const UserModel = mongoose.model("UserData", UserSchema);
module.exports = UserModel;
