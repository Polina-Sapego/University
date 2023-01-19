const testsService = require("../services/tests");
const Response = require("../helpers/response");



class TestController {


  async createTests(req,res,next){
    try{
    const test=req.body;
    await testsService.createTests(test)
    res.json(new Response("Test created", 200));
    }
    catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async updateTests1(req,res,next){
    try{
      const testId = req.params.id;
      const test=req.body;
      await testsService.updateTests(testId,test)
      res.json(new Response("Test update", 200));
      }
      catch (err) {
        console.log(err);
        return next(err);
      }
  }


  async deleteTests1(req,res,next){
  try {

      const testId = req.params.id;
    

        await testsService.deleteTests(testId);

        res.json(new Response("Delete successful", 200));
        
      } 
    catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async listTests(req,res,next){
    try {

      res.json(await testsService.listTests());

    } catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async findTestsById(req,res,next){
    try {
      const testID=req.params.id
      const test= await testsService.findTestsById(testID);
      res.json(new Response(test,200));

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

module.exports = new TestController();
