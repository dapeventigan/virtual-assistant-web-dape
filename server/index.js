// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// app.use(express.json());

// require("./models/contact");
// const Contacts = mongoose.model("Contacts");

// mongoose.connect(
//   "mongodb+srv://dabeventigan:OFWGKTA02@dape-cluster.v5jy0aw.mongodb.net/dape",
//   {
//     useNewUrlParser: true,
//   }
// );

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });



// app.get("/", async (req, res) => {
//   const getContact = new Contacts({ firstName: "Dape", companyName: "DAPE" });

//   try{
//     await getContact.save();
//     res.send("Data is inserted");
//   } catch(err){
//     console.log(err);
//   }
// });
