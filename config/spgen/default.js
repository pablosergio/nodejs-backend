 /*jslint node: true, nomen: true*/
"use strict";

var path = require('path');

module.exports = {
    "sequelize-pg-generator": {
        "database": {
            "host": "159.89.191.156",
            "port": 5432,
            "user": "postgres",
            "password": "nodejs2018",
            "database": "nodejs",
            "schema": ["public"]
        },
        "template": {
            "engine": "swig",
            "extension": "html",
            "folder": path.join(__dirname, '..', 'template', 'default')
        },
        "output": {
            "log": true,
            "folder": "./model",
            "beautify": true,
            "indent": 4,
            "preserveNewLines": false,
            "warning": true
        },
        "generate": {
            "stripFirstTableFromHasMany": true,
            "addTableNameToManyToMany": false,
            "addRelationNameToManyToMany": true,
            "stripFirstTableNameFromManyToMany": true,
            "hasManyThrough": false,
            "belongsToMany": true,
            "prefixForBelongsTo": "related",
            "useSchemaName": true,
            "modelCamelCase": false,
            "relationAccessorCamelCase": false,
            "columnAccessorCamelCase": false,
            "columnDefault": false,
            "columnDescription": true,
            "columnAutoIncrement": true,
            "tableDescription": true,
            "dataTypeVariable": "Seq",
            "skipTable": []
        },
        "tableOptions": {
            "timestamps": false
        }
    }
};