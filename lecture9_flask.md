# Harvard CS50 Lecture 9: Flask
dynamic websites

web applications : take input and generate output 

(website: static)

use server that knows how to take input from url

path (route)

https://example.com/route?key=value&key=value

-> how websites take input: in the form of a url

----
Flask
: third party library(framework) that makes it easier to implement web applications using python

(alternatives: Django)

-> start web applications not by running HTTP server, but by "flask run"

----
must have ```app.py``` and ```templates/``` folder that has the html, css, js

and  ```requirements.txt``` txt file where you sepcify one per line what third-party libraries you want to use
(makes it easy to install the libraries by one command)

and ```static/``` folder where you put images or .css files or .js files that are 'static'

-----
flask hands me the url info in a python dict "args" (don't have to get url and parse the keys and values) -> very conveciente

templates 에는 static 하게 표현할 구조를 html로 넣고, 그 안에 placeholder {{}}로 사용자의 인풋에 따른 내용 넣어서 동적으로 표현

Jinja는 {{}} 표현하는 문법

하지만 노출된다는 문제 있어

-> alternative: POST로 url에 보내기? request.form instead of request.args

47분.


---
questions
-http server 복습
-서버 측면에서 막는 거랑 프론트에서 막는 거랑 헷갈림.
플라스크는 둘 다 만들 수 있는거야?
