use Sistema;
drop database Sistema;
create database Sistema;

drop table users;
create table users(
	id smallint unsigned not null auto_increment,
    email varchar(255) not null unique,
    password varchar(255) not null,
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp,
    
    primary key(id)
);

insert into users(
	email, password
) values(
	"samilalucas@gmail.com",
    "123"
);