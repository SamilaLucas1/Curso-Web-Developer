create database schooll;

drop table courses;
create table courses(
	id smallint unsigned not null auto_increment,
    name varchar(255) not null,
    hours tinyint unsigned not null,
    created_at datetime default current_timestamp,
    update_at datetime default current_timestamp,
    
    primary key(id)
);
describe courses;

insert into courses(name, hours) values("Samila", 40);
insert into courses(name, hours) values("Clara", 40);
select * from courses;