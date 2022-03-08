const usersData = require('../data/usersData');

exports.getUsers = function () {
    return usersData.getUsers();
};