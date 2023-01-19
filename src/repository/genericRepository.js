//const usersModel = require("../models/users");
const {sequelize} = require('../database/sequelize');
const User = require('../models/user');

const UserInfo = require('../models/user_info');
class GenericRepository {

    constructor(model) {
        this._model = model;
    }

    async Create(user, userInfo) {
        return await sequelize.transaction(
            async (t) => {
                user = await User.create(user, { transaction: t });
               
                //userInfo = await UserInfo.createUserInfo(userInfo, { transaction: t });
                //await user.addRole(role, {transaction: t});

                //userInfo['id'] = userInfo['userId'] = undefined; // We already have id in 'user'
                //return {...user.get(), ...userInfo.get()};
                return user;
            }
        )
    }
    async GetDetailById(userId) {
        return await User.findOne({
            include: { model: UserInfo },
            where: { id: userId }
        })
    }

    async GetOneByQuery(query) {
        return await User.findOne({ where: query })
    }

    // async create(body) {
    //     const result = await this._model.create(body);
    //     return result;
    // }

    async findAll() {
        const result = await this._model.findAll();
        return result;
    }
    async GetById(userId) {
        return await User.findOne({
            where: {
                id: userId
            }
        })
        // let userInfo = await user.getUserInfo();
        // return {...user.get(), ...userInfo.get()};
    }

    // async findById(id) {
    //     const result = await this._model.findByPk(id);
    //     return result;
    // }

    // async findByQuery(query) {
    //     const result = await this._model.findAll(query);
    //     return result;
    // }

    // async findOne(query) {
    //     const result = await this._model.findOne(query);
    //     return result;
    // }

    // async update(object) {
    //     await object.save();
    // }

    // async deleteById(id) {
    //     const result = await this._model.destroy({ where: { id } });
    //     return result;
    // }
}

module.exports = GenericRepository;