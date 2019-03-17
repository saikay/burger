create database burger_db;
use burger_db;

create table burgers(
    id int auto_increment,
    primary key(id),
    burger_name varchar(100),
    devoured smallint(1) default 0 
);