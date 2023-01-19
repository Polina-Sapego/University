const feedback = require("./feedback");
const user = require("./user");
const faculties = require("./faculties");
const specialities = require("./specialities");
const speciality_test = require("./speciality_test");
const tests = require("./tests");
const univercity_specialties = require("./univercity_specialties");
const universities = require("./universities");
const user_info = require("./user_info");
const { sequelize } = require("../database/sequelize");


user.hasOne(user_info, { foreignKey: 'user_id', onDelete: 'CASCADE' });
user_info.belongsTo(user, { foreignKey: 'user_id' });


universities.belongsTo(user, { foreignKey: "manager_id", sourceKey: "id" });
feedback.belongsTo(universities, {
  foreignKey: "university_id",
  sourceKey: "id",
});
feedback.belongsTo(user, { foreignKey: "user_id", sourceKey: "id" });
faculties.belongsTo(universities, {
  foreignKey: "university_id",
  sourceKey: "id",
});
univercity_specialties.belongsTo(faculties, {
  foreignKey: "faculty_id",
  sourceKey: "id",
});
speciality_test.belongsTo(tests, { foreignKey: "test_id", sourceKey: "id" });
speciality_test.belongsTo(specialities, {
  foreignKey: "speciality_id",
  sourceKey: "id",
});
univercity_specialties.belongsTo(specialities, {
  foreignKey: "faculty_id",
  sourceKey: "id",
});

module.exports = {
  user,
  user_info,
  universities,
  univercity_specialties,
  tests,
  specialities,
  speciality_test,
  feedback,
  faculties,
};
