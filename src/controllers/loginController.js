const passport = require('passport');
const jwt = require('jsonwebtoken');
const usersService = require('../services/usersService');
const env = require('../env');


class LoginController {

    
    async Login(req, res) {
        let user = {
            login: req.body.login,
            password: req.body.password
        }

        res.send(await usersService.Login(user));
    }

    async SetAvatarByCurrentUser(req, res) {
        res.send(await usersService.SetAvatarById(req.user.id, req.file));
    }

    async GetAvatarByCurrentUser(req, res) {
        res.sendFile(await usersService.GetAvatarById(req.user.id));
    }

//    async login(req, res, next) {
//         try {
//             const body = {
//                 id: req.user.id,
//                 login: req.user.login,
//                 role: req.user.role
//             };
//           const token = jwt.sign({ user: body }, env.secretKey, { expiresIn: '24h' });
//             return res.status(200).send({ token: token });
//         } catch (err) {
//             next(err);
//         }
//     }
    // async signUp(req, res, next) { 
    //     try { 
    //         const userData = req.body; 
    //         await usersService.createUser(userData).then((result) => { res.status(201).send({ id: result.id }) }); 
    //         const result = await usersService.createUser(userData); 
    //         req.id = result.id; 
    //         res.status(201).send({ id: result.id }); 
    //        // await res.delegate('mailer'); 
    //     } catch (err) { 
    //         return next(err); 
    //     } 
    // } 
    async Register(req, res) {
        let user = {
            login: req.body.login,
            password: req.body.password
        };

        let userInfo = {
            avatar: req.body.avatar ?? null,
            firstName: req.body.firstName,
            birthday: req.body.birthday,
            email: req.body.email,
            phone: req.body.phone ?? null
        };

        res.send(await usersService.Register(user, userInfo))
    }
}




module.exports = new LoginController();