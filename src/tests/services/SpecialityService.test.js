const SpecializationTest = require('../services/specialization');

describe('specialization', () => {
    describe('Create', () => {
        test('should catch error - ticket is occupied', async () => {
            let specialization = {
                "name": "ПОИТ",
                "code": 4,
                "description": "jjjjj"
            }
            // Create place (catch if already exists)
            try { await SpecializationTest.Create(specialization); } catch (e) {}

            // test
            await expect(SpecializationTest.Create(specialization)).rejects.toThrow();
        })
    })
})