const speciality_testService = require("../services/speciality_test");
const Response = require("../helpers/response");



class speciality_testController {


  async createSpeciality_test(req,res,next){
    try{
    const speciality_test=req.body;
    await speciality_testService.createSpeciality_test(speciality_test)
    res.json(new Response("speciality_test created", 200));
    }
    catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async updateSpeciality_test1(req,res,next){
    try{
      const speciality_testId = req.params.id;
      const speciality_test=req.body;
      await speciality_testService.updateSpeciality_test(speciality_testId,speciality_test)
      res.json(new Response("speciality_test update", 200));
      }
      catch (err) {
        console.log(err);
        return next(err);
      }
  }


  async deleteSpeciality_test1(req,res,next){
  try {

      const speciality_testId = req.params.id;
    

        await speciality_testService.deleteSpeciality_test(speciality_testId);

        res.json(new Response("Delete successful", 200));
        
      } 
    catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async listSpeciality_test(req,res,next){
    try {

      res.json(await speciality_testService.listSpeciality_test());

    } catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async findSpeciality_testById(req,res,next){
    try {
      const Speciality_testID=req.params.id
      const Speciality_test= await speciality_testService.findSpeciality_testById(Speciality_testID);
      res.json(new Response(Speciality_test,200));

    } catch (err) {
      console.log(err);
      return next(err);
    }
  }








/*
  async delete(req, res, next) {

    try {

    const userId = req.params.id;
    let email = null;

    const user = await userService.findUserById(userId);

    email = user.email;

    
      if (req.session.user.id == userId) {
        throw new Error();
      }
      await userService.delete(userId);

      mailer(email, "Account deleted", "Your account has been deleted");

      res.json(new Response("Delete successful", 200));
      
    } catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async list(req, res, next) {

    try {

      let page = null;

      if(req.query.page) {
        page = req.query.page;
      }

      res.json(await userService.list(page));

    } catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async search(req, res, next){

    try{
      const criteria = {};
      if(req.query.firstName){

        criteria.name = "first_name";
        criteria.value = req.query.firstName;

      }else if(req.query.lastName){

        criteria.name = "last_name";
        criteria.value = req.query.lastName;

      }else if(req.query.email){

        criteria.name = "email";
        criteria.value = req.query.email;

      }

      res.json(await userService.search(criteria));

    }catch(err){
        next(err);
    }

  }

  async setRole(req, res, next) {

    try {

      const userId = req.params.id;
      let roleId = constants.userRoleNum;

      if (req.query.value === constants.adminRoleText) {

        roleId = constants.adminRoleNum;

      }
      else if(req.query.value === constants.userRoleText){

        roleId = constants.userRoleNum;

      }

      await userService.setRole(userId, roleId);

      res.json(new Response("Role set successful", 200));
      
    } catch (err) {
      console.log(err);
      return next(err);
    }
  }*/
}

module.exports = new speciality_testController();
