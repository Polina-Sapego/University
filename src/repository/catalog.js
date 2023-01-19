const universities = require("../models/universities");


class universitiesRepository {


  async create(universitiesInf){
    return await universities.create(universitiesInf)
  }

  async update(id, universitiesData){
    return await universities.update (universitiesData,{where: {id}});
  }

  async delete(id){
    return await universities.destroy({where:{id}});
  }

  async findAll(){
    return await universities.findAll();
  }

  async findId(id){
    return await universities.findOne({where:{id}});
  }




   
   

}

module.exports = new universitiesRepository();
