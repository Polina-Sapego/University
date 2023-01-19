const specializationService = require("../services/specialization");
const Response = require("../helpers/response");



class specializationController {


  async createSpecialization(req,res,next){
    try{
    const specialization=req.body;
    await specializationService.createSpecialization(specialization)
    res.json(new Response("Specialization created", 200));
    }
    catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async updateSpecialization1(req,res,next){
    try{
      const specializationId = req.params.id;
      const specialization=req.body;
      await specializationService.updateSpecialization(specializationId,specialization)
      res.json(new Response("Specialization update", 200));
      }
      catch (err) {
        console.log(err);
        return next(err);
      }
  }


  async deleteSpecialization1(req,res,next){
  try {

      const specializationId = req.params.id;
    

        await specializationService.deleteSpecialization(specializationId);

        res.json(new Response("Delete successful", 200));
        
      } 
    catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async listSpecialization(req,res,next){
    try {

      res.json(await specializationService.listSpecialization());

    } catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async findSpecializationById(req,res,next){
    try {
      const specializationID=req.params.id
      const specialization= await specializationService.findSpecializationById(specializationID);
      res.json(new Response(specialization,200));

    } catch (err) {
      console.log(err);
      return next(err);
    }
  }
}

module.exports = new specializationController();
