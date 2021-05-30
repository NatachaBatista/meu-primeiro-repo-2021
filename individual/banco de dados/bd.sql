use Nmusic;

show tables;

select * from usuario;

select*from genero_musica;

select count(fk_genero) as genero, fk_genero from usuario group by fk_genero;


/*create table usuario (
id_usuario int primary key auto_increment,
 nome_usuario varchar (45),
 email_usuario varchar (45),
 datanasc_usuario date,
senha_usuario varchar (45),
 fk_genero varchar (45));*/
 
 

