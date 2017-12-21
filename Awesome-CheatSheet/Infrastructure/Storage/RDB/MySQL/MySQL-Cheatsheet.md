[![返回目录](https://parg.co/UCb)](https://parg.co/UCH) 
 
 




# MySQL


```
SELECT 
  TABLE_NAME, table_rows, data_length, index_length,  
  round(((data_length + index_length) / 1024 / 1024),2) 'Size in MB' 
FROM information_schema.TABLES 
WHERE TABLE_NAME = 'r_case_info' and TABLE_TYPE='BASE TABLE' 
ORDER BY data_length DESC;
```


# 权限管理
```
SELECT User FROM mysql.user;


SET PASSWORD FOR 'root'@'localhost' = PASSWORD('MyNewPass');

```


## Query


- 根据时间日期进行筛选
```
# 使用 DATE 函数提取出时间
SELECT `tag`
FROM `tags`
WHERE DATE(`date`) = '2011-06-07'


# 使用 Between 获取某天内的时间
WHERE `date` 
BETWEEN '2011-06-07'
AND '2011-06-07 23:59:59'
```


# Oracle
## Query


- 获取前 N 行
```
SELECT val
FROM   rownum_order_test
ORDER BY val DESC
FETCH FIRST 5 ROWS ONLY;
```
- 获取前 N 行，如果第 N 行有多个相同值，则全部返回
```
SELECT val
FROM   rownum_order_test
ORDER BY val DESC
FETCH FIRST 5 ROWS WITH TIES;
```
- 获取前 `x%` 行：
```
SELECT val
FROM   rownum_order_test
ORDER BY val
FETCH FIRST 20 PERCENT ROWS ONLY;
```
- 根据偏移量查询，适用于需要分页的情况：
```
SELECT val
FROM   rownum_order_test
ORDER BY val
OFFSET 4 ROWS FETCH NEXT 4 ROWS ONLY;
```
- 综合使用偏移量与百分比查询：
```
SELECT val
FROM   rownum_order_test
ORDER BY val
OFFSET 4 ROWS FETCH NEXT 20 PERCENT ROWS ONLY;
```