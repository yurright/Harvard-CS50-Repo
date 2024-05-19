# Lecture 07: SQL

new lang: Structed Query Language

much smaller than C, python

flat-file database

python has native support for CSV: CSV library

```
import csv

with open("favorites.csv", "r") as file:
  reader = csv.reader(file)
  for row in reader:
    print(row[1])
```
근데 [1]로 불려야 하면 어떤 문제가 발생할 수 있을까?
: 컬럼 순서 바뀔 수 있음

```
import csv

with open("favorites.csv", "r") as file:
  reader = csv.DictReader(file)
  for row in reader: // get one dict for every row
    print(row["language"])
```

python csv 만으로 엑셀 파일 만들 수 있네


```
import csv

with open("favorites.csv", "r") as file:
  reader = csv.DictReader(file)
  scratch, c, python = 0, 0, 0
  for row in reader: // get one dict for every row
    favorite = row["language"]
    if favorite == "Scratch":
      scratch += 1
    elif favorite == "C":
      c += 1
    elif favorite = "Python":
      python += 1

print(f"Scratch: {scratch}")
print(f"C: {c}")
print(f"Python: {python}")
```

```
import csv

with open("favorites.csv", "r") as file:
  reader = csv.DictReader(file)
  counts = {}
  for row in reader: // get one dict for every row
    favorite = row["language"]
    counts[favorite] += 1 // python은 자동으로 키 생성 안 함

print(f"Scratch: {scratch}")
print(f"C: {c}")
print(f"Python: {python}")
```
수정
```
import csv

with open("favorites.csv", "r") as file:
  reader = csv.DictReader(file)
  counts = {}
  for row in reader: // get one dict for every row
    favorite = row["language"]
    if favorite in counts:
      counts[favorite] += 1
    else:
      counts[favorite] = 1

for favorite in counts:
  print(f"{favorite}: {counts[favorite]}")
```

sorted(counts)로 딕셔너리 **정렬** 가능

```
import csv

with open("favorites.csv", "r") as file:
  reader = csv.DictReader(file)
  counts = {}
  for row in reader: // get one dict for every row
    favorite = row["language"]
    if favorite in counts:
      counts[favorite] += 1
    else:
      counts[favorite] = 1

def get_value(language):
  return counts[language]

for favorite in sorted(counts, key=get_value, reverse=True):
  print(f"{favorite}: {counts[favorite]}")
```

lamda function : anonymous function

한 번만 사용할 함수여서 별도로 함수 작성하기 싫을 때 

```
import csv

with open("favorites.csv", "r") as file:
  reader = csv.DictReader(file)
  counts = {}
  for row in reader: // get one dict for every row
    favorite = row["language"]
    if favorite in counts:
      counts[favorite] += 1
    else:
      counts[favorite] = 1

def get_value(language):
  return counts[language]

for favorite in sorted(counts, key=lambda language: counts[language], reverse=True):
  print(f"{favorite}: {counts[favorite]}")
```

relational database: way to store lots of data

alternative to relational database: sql, nosql, object oriented databases

mysql, postgresql, microsoftsql server, oracle, mariadb

relational database: store data in rows and colums 
terminology a little bit different

sheets -> tables
tables still have rows and columns

sql does 4 basic things: crud
"a relational database ultimately supports
creating data
reading data
updating data
deleting data"

the corresponding functions to crud:

c: CREATE, INSERT
r: SELECT
u: UPDATE
d: DELETE, DROP


create a table
```
CREATE TABLE table (column type, ...); // generally all lowercase, no spaces is best
```
in parantheses, the list of columns that you want in the table

새로운 디비 만들기
```
$ sqlite3 favorites.db
```

csv 파일 디비로 만들기
```
sqlite> .mode csv //sqlite이 이게 csv 파일이라는 걸 알도록
sqlite> .import favorites.csv favorites //마지막 favorites는 만들고자 하는 테이블의 이름
sqlite> .schema
```

.로 시작하는 명령어는 sqlite sepcific! not sql!

the **schema** of a database is the design of the database

```
sqlite> .schema
```
shows the CREATE TABLE command that was automatically run by just doing the import line 


select data from sql database
```
SELECT nameofcolumns FROM nameoftable;
```
SELECT capital sql convention

* : give me everything

```
sqlite> SELECT * FROM favorites;
```

sql functions:
AVG
COUNT
DISTINCT
LOWER
MAX
MIN
UPPER
...

```
sqlite> SELECT COUNT(*) FROM favorites //give me the count of the rows
```

```
sqlite> SELECT DISTINCT(language) FROM favorites
```
-> language 종류가 나옴 (약간 세트화 하는 거 같음)

```
sqlite> SELECT COUNT(DISTINCT(language)) FROM favorites;
```
-> 3

 

```
sqlite> SELECT COUNT(DISTINCT(language)) as n FROM favorites;
```
n 이름의 칼럼, row 안에 3 쓰인 subset table 나옴

other keywords in sql (finetune how we crud)
WHERE (filter bring data where this is true)
LIKE (alternative to equal sign. )
ORDER BY
LIMIT
GROUP BY
...

```
sqlite> SELECT COUNT(*) FROM favorites WHERE language = 'C';  //sqlite 는 "" 가 아니라 '' 사용
```

```
sqlite> SELECT COUNT(*) FROM favorites WHERE language = 'C' AND problem = 'Mario';
```

```
SELECT language, COUNT(*) FROM favorites GROUP BY language;
```

insert data into sql db
```
> INSERT INTO table (column, ...) VALUES(value, ...);
```

update

delete

IMDb

--
Questions

postgresssql mysql 등이 다른 언어야?

open file 하면 0,1로 읽혀??
reader = csv.reader(file)은 정확히 뭐야 ? 0,1 형태로 된 걸
string,string,형태로 변환한 것을 반환해주는거야?약간 compile처러?

key=get_value 함수 자체를 키로 넣은 게 무슨 뜻인지? 이해 잘 안 감. 이 코드 이해 안 감

lambda function

sql 다시 보고 공부해야 할 것 같음. select, count(*) 등 아직 잘 이해 안 감


