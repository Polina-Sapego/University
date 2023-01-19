const universitiesService = require("../services/catalog");
const Response = require("../helpers/response");



class universityController {


  async createUniversity(req,res,next){
    try{
    const university=req.body;
    await universitiesService.createUniversity(university)
    res.json(new Response("University created", 200));
    }
    catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async updateUniversity1(req,res,next){
    try{
      const universityId = req.params.id;
      const university=req.body;
      await universitiesService.updateUniversity(universityId,university)
      res.json(new Response("University update", 200));
      }
      catch (err) {
        console.log(err);
        return next(err);
      }
  }


  async deleteUniversity1(req,res,next){
  try {

      const universityId = req.params.id;
    

        await universitiesService.deleteUniversity(universityId);

        res.json(new Response("Delete successful", 200));
        
      } 
    catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async listUniversity(req,res,next){
    try {

      res.json(await universitiesService.listUser());

    } catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async findUniversityById(req,res,next){
    try {
      const universityID=req.params.id
      const university= await universitiesService.findUserById(universityID);
      res.json(new Response(university,200));

    } catch (err) {
      console.log(err);
      return next(err);
    }
  }





}

module.exports = new universityController();
