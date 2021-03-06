/**
 * Created by Sergio on 10/12/2016.
 */
var Sequelize   = require("sequelize");
var jwt         = require('jsonwebtoken');
var q           = require('q');
var menuService = require('./menuService.js');

module.exports = function(){
    var authenticateUser = function(credentials){
        var deferred = q.defer();
        var _sequelize = new Sequelize(process.env.DATA_BASE, credentials.username, credentials.password, {
            dialect : process.env.DB_DIALECT,
            port: process.env.DB_PORT,
            schema: process.env.DB_SCHEMA,
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });

        _sequelize.authenticate().then(function(){
            var service = menuService(credentials);
            service.getUserMenu({username: credentials.username}).then(function(menu){
                token = jwt.sign({username: credentials.username, password: credentials.password, menu: menu}, process.env.TOKEN_SECRET, { expiresIn : 60*60*24 });
                deferred.resolve(token);
            });
        }, function(error){
            deferred.reject(error);
        })

        return deferred.promise;
    };

    return {
        authenticate: authenticateUser,
    }
};