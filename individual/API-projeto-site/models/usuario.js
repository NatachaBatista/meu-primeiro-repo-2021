	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id_usuario: {
			field: 'id_usuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome_usuario: {
			field: 'nome_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		email_usuario: {
			field: 'email_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},

		datanasc_usuario: {
			field: 'datanasc_usuario',
			type: DataTypes.DATE,
			allowNull: false
		},


		senha_usuario: {
			field: 'senha_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},

		fk_genero: {
			field: 'fk_genero',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 

	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
