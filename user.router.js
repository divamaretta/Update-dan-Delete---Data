const {
  controllerAddUser,
  controllerGetUsers
} = require("./user.controller");

const router = require("express").Router();
router.post("/add", controllerAddUser);
router.get("/get", controllerGetUsers);
module.exports = router;

module.exports = {
  controllerUpdateUser: (req,res) => {
      const body = req.body
      const salt = genSaltSync(10)
      body.password = hashSync(body.password, salt)
      serviceUpdateUser(body,(err,results)=>{
          if(err){
              console.log(err);
              return
          }
          if(!results){
              return res.json({
                  success:0,
                  message:"update failed"
              })
          }else{
              return res.json({
                  success:1,
                  message:"update successfully"
              })
          }
      })
  },
  controllerDeleteUser:(req,res)=>{
      const body = req.body.id
      serviceDeleteUser(body,(err,results)=>{
          if(err){
              console.log(err)
              return
          }if(!results){
              return res.json({
                  success:0,
                  message:"Record data not found"
              })
          }else{
              return res.json({
                  success:1,
                  message:"delete data successful"
              })
          }
      })
  }
};
