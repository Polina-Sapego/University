const userService = require("../services/user");
const Response = require("../helpers/response");



class UserController {


  async createUser(req,res,next){
    try{
    const user=req.body;
    await userService.createUser(user)
    res.json(new Response("User created", 200));
    }
    catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async updateUser1(req,res,next){
    try{
      const userId = req.params.id;
      const user=req.body;
      await userService.updateUser(userId,user)
      res.json(new Response("User update", 200));
      }
      catch (err) {
        console.log(err);
        return next(err);
      }
  }


  async deleteUser1(req,res,next){
  try {

      const userId = req.params.id;
    

        await userService.deleteUser(userId);

        res.json(new Response("Delete successful", 200));
        
      } 
    catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async listUser(req,res,next){
    try {

      res.json(await userService.listUser());

    } catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async findUserById(req,res,next){
    try {
      const userID=req.params.id
      const user= await userService.findUserById(userID);
      res.json(new Response(user,200));

    } catch (err) {
      console.log(err);
      return next(err);
    }
  }
}

module.exports = new UserController();
