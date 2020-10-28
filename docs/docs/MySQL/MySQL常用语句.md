---
title: MySQL常用语句
---

### MySQL常用语句

```sql
# 今天
select * from table where to_days(column_time) = to_days(now());
select * from table where date(column_time) = curdate();

# 昨天
SELECT * FROM table WHERE TO_DAYS(NOW()) - TO_DAYS( column_time) <= 1

# 7天
SELECT * FROM table where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(column_time)

查询一周：
select * from table where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <=date(column_time);

查询一个月：
select * from table where DATE_SUB(CURDATE(), INTERVAL INTERVAL 1 MONTH) <= date(column_time);

# 近30天
SELECT * FROM table where DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= date(column_time)

# 本月
SELECT * FROM table WHERE DATE_FORMAT(column_time,'%Y%m') = DATE_FORMAT( CURDATE( ),'%Y%m')

# 上一月
SELECT * FROM table WHERE PERIOD_DIFF(date_format(now() ,'%Y%m'),date_format(column_time, '%Y%m')) =1

# 查询本季度数据
select * from table where QUARTER(create_date)=QUARTER(now());

# 查询上季度数据
select * from table where QUARTER(create_date)=QUARTER(DATE_SUB(now(),interval 1 QUARTER));

# 查询本年数据
select * from table where YEAR(create_date)=YEAR(NOW());

# 查询上年数据
select * from table where year(create_date)=year(date_sub(now(),interval 1 year));

# 查询当前这周的数据 
SELECT * FROM table WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now());

# 查询上周的数据
SELECT * FROM table WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now())-1;

# 查询当前月份的数据
select * from table where date_format(submittime,'%Y-%m')=date_format(now(),'%Y-%m')

# 查询距离当前现在6个月的数据
select * from table where submittime between date_sub(now(),interval 6 month) and now();

# 查询上个月的数据
select * from table where date_format(submittime,'%Y-%m')=date_format(DATE_SUB(curdate(), INTERVAL 1 MONTH),'%Y-%m')

select * from table where DATE_FORMAT(pudate, '%Y%m') = DATE_FORMAT(CURDATE(),'%Y%m') ;

select * from table where WEEKOFYEAR(FROM_UNIXTIME(column_time,'%y-%m-%d')) = WEEKOFYEAR(now())

select * from table where MONTH(FROM_UNIXTIME(column_time, '%y-%m-%d')) = MONTH (now())

select * from table where YEAR(FROM_UNIXTIME(column_time, '%y-%m-%d')) = YEAR (now()) and MONTH (FROM_UNIXTIME(column_time, '%y-%m-%d')) = MONTH (now())

select * from table where pudate between 上月最后一天 and 下月第一天

where date(column_time) = curdate();

select * from table where year(regdate)=year(now()) and month(column_time)=month(now()) and day(column_time)=day(now())

SELECT date(column_time) ,curdate() FROM table WHERE 1 LIMIT 0 , 30
```

