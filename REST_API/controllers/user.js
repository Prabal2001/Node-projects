  const User = require('../models/user');
    async function handleAllUsers(req,res) {
        const dbUsers = await User.find({});
         return res.json(dbUsers);
    } 

    async function getUserById(req,res) {
          const user = await User.findById(req.params.id);
           return res.json(user);
    }

    async function CreateUser(req,res) {
        const body = req.body;
        if(!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title){
            return res.status(400).json({msg:'All fields not filled'});
        }
        const result =  await User.create({
            firstName:body.first_name,
            lastName:body.last_name,
            email:body.email,
            gender:body.gender,
            jobTitle:body.job_title 
        })
        console.log("Result",result);
        return res.status(201).json({msg:'Success creating user'});
  }
  async function deleteUser(req,res) {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:'deleted successfully'});
}
module.exports = {
     handleAllUsers,
     getUserById,
     CreateUser,
     deleteUser
}