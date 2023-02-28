const User = require("../models/user");
const router = require("express").Router();

//get a specific contact through id
router.get("/contacts/:id", async(req,res)=>{
    try {
        const user = await User.findOne({_id:(req.params.id)})
        if(!user){
            return res.status(404).json({
                status:"failed",
                message:"Id not found"
            })
        }

        res.status(200).json({
            status:"success",
            user
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})


module.exports = router