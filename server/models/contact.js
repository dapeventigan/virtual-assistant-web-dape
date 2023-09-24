const mongoose = require("mongoose");

const ContactDetails = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    companyName: String,
    contactNumber: String,
    emailAddress: String,
    messageDetails: String,
  },
  { collection: "Contacts"}
);

const Contacts = mongoose.model("Contacts", ContactDetails);
module.exports = Contacts;
