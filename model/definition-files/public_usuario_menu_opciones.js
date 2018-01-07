/*jslint node: true */
"use strict";
/*------------------------------------------------------------------------------------

DO NOT EDIT THIS FILE !!! It is generated automatically and will be overwritten.

To modify this model:
1. Create 'usuario_menu_opciones.js' file in 'definition-files-custom' directory located in this file's parent directory.
2. Copy the code below and paste it into 'usuario_menu_opciones.js'.
3. Use utility methods to easily access orm properties.

"use strict";
var orm     = require('model\index.js'),
    model   = require('./usuario_menu_opciones.js'),
    util    = require('../utils.js')(model),
    Seq     = orm.Sequelize();

module.exports = model;

// Some utility methods:
util.getRelation("menu_opcion").onDelete = 'CASCADE'; 
util.getAttribute("usuario_menu_opcion_id").comment = 'This is the comment'; 

------------------------------------------------------------------------------------*/
var orm = require('../index.js'),
    Seq = orm.Sequelize();
module.exports = {
    modelName: "public.usuario_menu_opciones",
    options: {
        tableName: "usuario_menu_opciones",
        schema: "public",
        timestamps: false
    },
    attributes: {
        "usuario_menu_opcion_id": {
            type: Seq.INTEGER,
            field: "usuario_menu_opcion_id",
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: "usuario_menu_opciones_pk"
        },
        "username": {
            type: Seq.TEXT,
            field: "username",
            allowNull: false,
            references: {
                model: "public.usuarios",
                key: "username"
            }
        },
        "menu_opcion_id": {
            type: Seq.INTEGER,
            field: "menu_opcion_id",
            allowNull: false,
            references: {
                model: "public.menu_opciones",
                key: "menu_opcion_id"
            }
        },
        "estado": {
            type: Seq.STRING(50),
            field: "estado"
        },
        "fecha_registro": {
            type: Seq.DATE,
            field: "fecha_registro"
        }
    },
    relations: [{
        type: "belongsTo",
        model: "public.menu_opciones",
        schema: "public",
        table: "menu_opciones",
        source: "generator",
        details: {
            as: "menu_opcion",
            foreignKey: "menu_opcion_id",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }, {
        type: "belongsTo",
        model: "public.usuarios",
        schema: "public",
        table: "usuarios",
        source: "generator",
        details: {
            as: "related_username",
            foreignKey: "username",
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    }]
};