const user_info = require("../repository/user_info");
const NotAcceptableError = require("../errors/NotAcceptableError");


class User_infoService {


  async createUser_info(userInf){
    return await user_info.create(userInf)
  }

  async updateUser_info(id, userData){
    const res =await user_info.update(id,userData);
    if (res){
      return res;
    }
    else{
      throw new NotAcceptableError("ID doesn't find");
    }
  }

  async deleteUser_info(id){
    const res =await user_info.delete(id);
    if (res){
      return res;
    }
    else{
      throw new NotAcceptableError("ID doesn't find");
    }
  }


  async listUser_info(){
    return await user_info.findAll();

  }

  async findUserById_info(id){
    const res =await user_info.findId(id);
    if (res){
      return res;
    }
    else{
      throw new NotAcceptableError("ID doesn't find");
    }
  }


/*
  update(id, userData) {

    return User.update(id, userData);

  }

  changePassword(id, passwords){

    return User.changePassword(id, passwords);

  }

  search(criteria){

    return User.search(criteria);

  }

  async findUserByEmail(email) {

    return await User.findUserByEmail(email);

  }

  async findUserById(id){

    return await User.findUserById(id);

  }

  async delete(id) {
    
    if (await DeleteRequest.findRequest(id)) {

      return await User.delete(id);

    } else {

      throw new NotAcceptableError("Request doesn't exists");

    }
  }

  async list(page) {

    return await User.list(page);

  }

  async setRole(userId, roleId) {

    if (roleId == constants.userRoleNum) {

      if (await UserRole.isLastAdmin(userId)) {

        throw new NotAcceptableError("Can't delete last admin");
        
      }
    }

    return UserRole.setRole(userId, roleId);

  }

  async automaticDelete() {

    const requests = await DeleteRequest.findAll();
    const currentDate = new Date();

    for(let req of requests) {

      const diff = (currentDate - req.createdAt) / 60000;

      if (diff > 5) {

        await User.delete(req.user_id);

      }
    }
  }*/
}

module.exports = new User_infoService();
