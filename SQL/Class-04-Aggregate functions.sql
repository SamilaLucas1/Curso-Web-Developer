-- aggregate functions

select * from sales order by name, sale desc;
select distinct city from sales order by city;
select * from sales where name = "Ana Clara";
select * from sales where name like "_a%";
select * from sales where month in ('out', 'nov') order by month;
select * from sales where sale > 3000 and sale < 4000 order by sale;
select * from sales where sale between 3000 and 4000 order by sale; 
-- between= maior ou igual
select * from sales;

select count(*) from sales;
select sum(sale) from sales where city='Jucas';
select count(distinct name) from sales;

select 
	count(*),
    sum(sale),
    max(sale),
    min(sale),
    avg(sale),
    std(sale)
from sales
where city = 'carius' and name = "jill";

SELECT city, SUM(sale) AS total 
FROM sales GROUP BY city
ORDER BY total DESC;

SELECT
	name,
	COUNT(sale),
    SUM(sale) AS total,
    AVG(sale),
	STD(sale)
FROM sales
GROUP BY name
HAVING total > 350000 
ORDER BY total DESC;  
