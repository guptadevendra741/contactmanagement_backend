const User = require("../models/user");
const router = require("express").Router();

///post new contacts or new user
router.post("/newcontact", async (req, res) => {
  try {
    const { firstName,lastName,email, phone } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    if (!phone || !firstName || !lastName || !email) {
      return res.status(400).json({ message: "Missing field !! provide all the fields " });
    }

    
    user = await User.create({ firstName,lastName,email, phone});
    res.status(200).json({user});
  } catch (error) {
    res.json({
        status:"failed",
        message:error.message
    })
  }
});
  

//get all contacts
router.get('/contacts', async(req,res)=>{
  const contacts = await User.find();
  res.status(200).json({
      status:"success",
      contacts
  })
});

module.exports = router;