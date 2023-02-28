const User = require("../models/user");
const router = require("express").Router();

router.put('/contacts/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!updatedUser) {
        return res.status(404).json({ message: 'There is no contact with that id' });
      }
    
      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  //partially update data
  router.patch('/contacts/:id', async (req, res) => {
    const id = req.params.id;
    const updates = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(id, updates, { new: true });
      res.send(user);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  });
  
  module.exports = router;