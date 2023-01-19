const UserServiceTest = require('..services/usersService');

describe('PlaceService', () => {
    describe('GetAll', () => {
        test('should return array with all users', async () => {
            expect(await UserServiceTest.GetAll()).not.toBeUndefined();
        })
    })

    describe('GetById', () => {
        test('should catch error - no such user', async () => {
            await expect(UserServiceTest.GetDetailById(99999)).rejects.toThrow();
        })

        test('should return user with id 1', async () => {
            expect(await UserServiceTest.GetDetailById(1)).not.toBeUndefined();
        })
    })

    describe('signup', () => {
        test('should catch error - validation', async () => {
            await expect(UserServiceTest.signup({login: 'Famouse', password: "1"})).rejects.toThrow();
        })
    })

    describe('login', () => {
        test('should catch error - authorization', async () => {
            await expect(UserServiceTest.login({login: 'dfsdf', password: "sdfs"})).rejects.toThrow();
        })
    })
})