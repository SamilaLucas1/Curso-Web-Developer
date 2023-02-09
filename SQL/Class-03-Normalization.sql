use school;

create table Courses (
	id smallint unsigned auto_increment not null,
    name varchar(255) not null,
    hours tinyint unsigned not null,
    primary key(id)
);

describe Courses;

insert into Courses (name, hours) values
('Programador Web', 240),
('Informatica para o mundo do trabalho', 160),
('Ferramentas digitais', 60);

select * from Courses;

create table studants (
	id smallint unsigned auto_increment not null,
    name varchar(255) not null,
    street varchar(255) not null,
    neighborhood varchar(255) not null,
    city varchar(255) not null,
    course smallint unsigned not null,
    primary key(id),
    foreign key(course) references courses(id)
);

drop table studants;
describe studants;

insert into studants (name, street, neighborhood, city, course) values 
('Emanuel', 'Rua A', 'Bairro B', 'Cidade C', 1),
('Mario', 'Rua A', 'Bairro B', 'Cidade C', 1),
('Samila', 'Rua A', 'Bairro B', 'Cidade C', 2);

select studants.name, courses.name from studants
inner join courses
on studants.course = courses.id;

create table phones (
	id smallint unsigned auto_increment not null,
    number varchar(255) not null,
    studant smallint unsigned not null,
    primary key(id),
    foreign key(studant) references studants(id)
    -- on delete cascade = delete por cascadas
);

describe phones;

insert into phones (number, studant) values
('(88)8888-8888', 1),
('(88)9999-9999', 1),
('(88)0000-0000', 2),
('(88)1111-1111', 3);

select * from phones;


select * from studants inner join phones on studants.id = phones.id;

select studants.name, phones.number from phones
 inner join studants 
 on studants.id = phones.studant;
 
SELECT * FROM studants;
DELETE FROM studants WHERE id = 1;
-- apaga o primeiro estudante da lista, obrigatorio on delete cascade