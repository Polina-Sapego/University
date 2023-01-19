const facultiesService = require("../services/faculties");
const Response = require("../helpers/response");



class facultiesController {


  async createFaculty(req,res,next){
    try{
    const faculty=req.body;
    await facultiesService.createFaculty(faculty)
    res.json(new Response("faculty created", 200));
    }
    catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async updateFaculty1(req,res,next){
    try{
      const facultyId = req.params.id;
      const faculty=req.body;
      await facultiesService.updateFaculty(facultyId,faculty)
      res.json(new Response("faculty update", 200));
      }
      catch (err) {
        console.log(err);
        return next(err);
      }
  }


  async deleteFaculty1(req,res,next){
  try {

      const facultyId = req.params.id;
    

        await facultiesService.deleteFaculty(facultyId);

        res.json(new Response("Delete successful", 200));
        
      } 
    catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async listFaculty(req,res,next){
    try {

      res.json(await facultiesService.listFaculty());

    } catch (err) {
      console.log(err);
      return next(err);
    }

  }

  async findFacultyById(req,res,next){
    try {
      const FacultyID=req.params.id
      const Faculty= await facultiesService.findFacultyById(FacultyID);
      res.json(new Response(Faculty,200));

    } catch (err) {
      console.log(err);
      return next(err);
    }
  }






}

module.exports = new facultiesController();
