-- aggregate functions

select * from sales order by name, sale desc;
select distinct city from sales order by city;
select * from sales where name = "Ana Clara";
select * from sales where name like "_a%";
select * from sales where month in ('out', 'nov') order by month;
select * from sales where sale > 3000 and sale < 4000 order by sale;
select * from sales where sale between 3000 and 4000 order by sale; 
-- between= maior ou igual