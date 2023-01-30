use school;

drop table studants;

create table studants(
	id smallint unsigned primary key auto_increment,
	name varchar(50) not null,
    cpf varchar(11) unique not null,
    birth_year date not null,
    city varchar(20) default 'Jucás'
);

select * from studants;
describe studants;

insert into studants values
(default, 'Samila', "12345678900", "2004-09-30", default),
(default, 'Clara', "09876543211", "2004-09-30", default),
(default, 'Emanuel', "98765432111", "2004-09-30", default),
(default, 'Murilo', "87654321234", "2004-09-30", default);

select 
	name, birth_year, 
    current_date() Hoje,
    floor(datediff(current_date, birth_year)/ 365.25) Idade
from studants;

-- Crie uma tabela curso: Id, nome, carga
-- Insira os cursos: programador web 160, ferramentas digitais 120, empreendedorismo 20.alter

drop table curso;

create table curso(
	id smallint unsigned primary key auto_increment,
	name varchar(50) not null,
    carga tinyint unsigned);

insert into curso values 
	(default, 'Programador Web', 160),
    (default, 'Ferramentas Digitais', 120),
    (default, 'Empreendedorismo', 20);
    
select * from curso;
describe curso;