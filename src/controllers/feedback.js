const feedbackService = require("../services/feedback");
const Response = require("../helpers/response");



class feedbackController {


  async createFeedback(req,res,next){
    try{
    const feedback=req.body;
    await feedbackService.createFeedback(feedback)
    res.json(new Response("feedback created", 200));
    }
    catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async updateFeedback1(req,res,next){
    try{
      const feedbackId = req.params.id;
      const feedback=req.body;
      await feedbackService.updateFeedback(feedbackId,feedback)
      res.json(new Response("feedback update", 200));
      }
      catch (err) {
        console.log(err);
        return next(err);
      }
  }


  async deleteFeedback1(req,res,next){
  try {

      const feedbackId = req.params.id;
    

        await feedbackService.deleteFeedback(feedbackId);

        res.json(new Response("Delete successful", 200));
        
      } 
    catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async listFeedback(req,res,next){
    try {

      res.json(await feedbackService.listFeedback());

    } catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async findFeedbackById(req,res,next){
    try {
      const feedbackID=req.params.id
      const feedback= await feedbackService.findFeedbackById(feedbackID);
      res.json(new Response(feedback,200));

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
      let Id = constants.userRoleNum;

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

module.exports = new feedbackController();
