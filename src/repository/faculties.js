const faculties = require("../models/faculties");


class facultiesRepository {


  async create(facultiesInf){
    return await faculties.create(userInf)
  }

  async update(id, userData){
    return await faculties.update (userData,{where: {id}});
  }

  async delete(id){
    return await faculties.destroy({where:{id}});
  }

  async findAll(){
    return await faculties.findAll();
  }

  async findId(id){
    return await faculties.findOne({where:{id}});
  }

/* 

  findUserByEmail(email) {

    return User.findOne({ where: { email: email } });

  }

  findUserById(id) {

    return User.findOne({ where: { id: id } });

  }

  async update(id, userData){

    return User.update(userData, {where: {id: id}});

  }

  async changePassword(id, passwords){

    const user = await User.findOne({where: {id: id}});
    const oldIsCorrect = user.validatePassword(passwords.oldPassword);
    let userData = new Object();

    if(oldIsCorrect){

      userData.password = bcrypt.hashSync(passwords.newPassword, bcrypt.genSaltSync(8));

    } else {

      throw new NotAcceptableError("Incorrect old password");

    }

    return User.update(userData, {where: {id: id}});

  }

  async create(userData) {

    let user = null;

    try{

      user = await User.create(userData);

    } catch(err){

      if(err.parent.errno == 1024){

        throw new NotAcceptableError("User already exists");

      }

      throw new Error("Failed to add new user");

    }

    return user;

  }

  async list(page) {

    let result = null;
    const usersOnPage = constants.usersOnPage;

    if(page){

      result = await User.findAll({offset: page * usersOnPage - usersOnPage, limit: usersOnPage});

    } else {

      result = await User.findAll();

    }

    for (let obj of result) {

      let roles = [];
      let rolesObj = await obj.getRoles();

      rolesObj.forEach(element => {

        roles.push(element.dataValues.name); 

      });

      obj.dataValues.roles = roles;

    }

    return result;

  }

  async search(criteria){

    if(!criteria){

      throw new NotAcceptableError("Wrong search parameters");

    }

    let result = await User.findOne({where: {[criteria.name]: criteria.value}});

    if(!result){

      throw new NotFound("Users not found");

    }

    return result;

  }

  async delete(id) {

    return await User.destroy({ where: { id: id } });
    
  } */
}

module.exports = new facultiesRepository();
