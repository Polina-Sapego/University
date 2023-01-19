const usersRepository = require("../repository/usersRepository");
const usersInfoRepository = require("../repository/userslnfoRepository");
const bcrypt = require("bcrypt");
const constants = require('../utils/constants');
const { roles } = require("../utils/constants");
const ForbiddenError = require("../errors/ForbiddenError");
const NotFoundError = require("../errors/notFoundError");
const jwt = require('jwt-simple');
const env = require('../env');
const Mailer = require('../utils/Mailer');
class UsersService {

    async findByLogin(login) {
        const result = await usersRepository.findOne({ where: { login: login } });
        return result;
    }

    async Register(user, userInfo, userData) {
        // let role = await roleRepository.GetById(UserConfig.Users.DefaultRole);
        // if (role === null) {
        //     throw new Error("Role not found");
        // }
        // if (userData.role == roles.admin) {
        //             throw new ForbiddenError('Forbidden. Use special method for manager');
        //         }
        // Hashing the password
        //user.password = await crypt.CryptPassword(user.password);
        // let mail = {
            
        //     subject: 'Welcome to Univercity',
            
        // }

        // await Mailer(JSON.stringify(mail));
        user = await usersRepository.Create(user, userInfo);

       
        return user;
    }
    GenerateToken(userId) {
        let payload = {
            userId: userId,
        }

        let token = jwt.encode(payload, env.secretKey);

        return token;
    }

    async Login(user) {
        const password = user.password;
        user = await usersRepository.GetOneByQuery({login: user.login});

        if (!user) {
            throw new NotFoundError('No such user');
        }

        

        let token = this.GenerateToken(user.id)

        return await this.GetCurrentUser(user.id, token);
    }


    async GetCurrentUser(userId, token) {
        let detailUser = await usersRepository.GetDetailById(userId);
        detailUser = detailUser.get();
        detailUser.token = token;
        
        return detailUser;
    }
    async GetDetailById(userId) {
        let user = await usersRepository.GetById(userId);

        if (!user) {
            throw new NotFoundError("No such user");
        }

        
        return user;
    }
   
    async getUser(userId) {
        const result = await usersRepository.findById(userId);
        if (result === null) {
            throw new NotFoundError("User not found");
        }
        return result;
    }
    
    async deleteUser(userId) {
        const result = await usersRepository.deleteById(userId);
        if (result == 0) {
            throw new NotFoundError('User not found');
        }
        return result;
    }

    async freezeUser(userId) {
        const user = await usersRepository.findById(userId);
        if (user === null) {
            throw new NotFoundError("User not found");
        }
        user.isActive = !user.isActive;
        await usersRepository.update(user);
    }

    async getAllUsers() {
        const result = await usersRepository.findAll();
        return result;
    }

    async getUserInfo(userId) {
        const result = await usersInfoRepository.findOne({ where: { userId: userId } });
        if (!result) {
            throw new NotFoundError('Info about this user not found');
        }
        return result;
    }

    async changePassword(userId, oldPassword, newPassword) {
        const user = await usersRepository.findById(userId);
        const match = await bcrypt.compare(oldPassword, user.password);
        if (match) {
            await bcrypt.hash(newPassword, 10)
                .then((hash) => { user.password = hash; });
            await usersRepository.update(user);
        } else {
            throw new ForbiddenError("Incorrect password");
        }
        return user;
    }

    async updateUserInfo(userId, newInfo) {
        const info = await usersInfoRepository.findOne({ where: { userId: userId } });
        if (!info) {
            throw new NotFoundError("Info about this user not found");
        }
        for (let key in newInfo) {
            info[key] = newInfo[key];
        }
        await usersInfoRepository.update(info);
        return info;
    }
}

module.exports = new UsersService();