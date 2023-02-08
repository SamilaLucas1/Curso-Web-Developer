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