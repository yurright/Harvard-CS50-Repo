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

--
Questions

postgresssql mysql 등이 다른 언어야?

open file 하면 0,1로 읽혀??
reader = csv.reader(file)은 정확히 뭐야 ? 0,1 형태로 된 걸
string,string,형태로 변환한 것을 반환해주는거야?약간 compile처러?

key=get_value 함수 자체를 키로 넣은 게 무슨 뜻인지? 이해 잘 안 감. 이 코드 이해 안 감

lambda function



