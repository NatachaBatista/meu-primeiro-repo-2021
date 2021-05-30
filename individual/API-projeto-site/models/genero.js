	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Genero_Musica = sequelize.define('Genero_Musica',{
		id_genero: {
			field: 'id_genero',
			type: DataTypes.INTEGER,
			primaryKey: true
		},		
		nome_genero: {
			field: 'nome_genero',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 

	{
		tableName: 'genero_musica', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Genero_Musica;
};
