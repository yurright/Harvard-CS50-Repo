# Lecture 8: HTML, CSS, JS

routers
: computers(servers) whose purpose in life is to route information.

a packet of information

route data, 

packet: generic term for some amount of information
(analogous to 'envelope')



TCP/IP
:two protocols the internet generally uses nowadays

to get data from point A fo point B

IP: internet protocol.

ip addresses, (internet protocol address)

#.#.#.# 
every internet work device has an IP address, 
(similar to address of building)
ip addresses uniquely represent computers
(but there are ways to share ip addresses)
each # represents a value between 0 and 255
ip addresses are 4 bytes, or 32 bits 대충 4 billion

not enough. so

gradually transitioning from IPv4 (version) to IPv6


source address
destination address

ip 의의: standardizes what you put on the outside of envelopes.


TCP
ip alone not enough to garuantee delivery.
ex. the router is overwhelmed

TCP: used in conjunction with IP by phone, macs, 
does:
-guarantess delivery: by sequence number
-port numbers

port number clues type of data, or program that should open this.
->write port number. 
80 HTTP
443 HTTPS

1,2,3,4:80 colon 다음에 80 포트 넘버 작성.
소스도 포트 넘버 지정

tcP/ip; pair of protocols to get data from a to b
ip: standardizes the address
tcp: 
-guarantees delivery wih sequence numbers, 
-helps servers do more than one thing by port numbers

---
DNS
when visit website, use domain name

DNS: type of server domain name system server
whose purpose is to answer the quesiton "what is the ip address of this domain name?"

harvard.edu 엔터 누르면
my device asks some local DNS server 'what is the ip address of harvard.edu?'
DNS server responds with a numeric address #.#.#.#

you device uses this number on the packet(virtual envelope)

dns: has dictionary(hash table) of (fully qualified) domain name and ip address



---
local dns server 보통 인터넷 제공사, 네트워크 provider

dns server has hierarchy system. ask 윗 윗. 

root servers: know all

when buy domain name: 

----
DHCP
옛날에는 처음 구매하면 기기를 configure 설정해서 근처 router, 근처 DNS 지정해주고 감

nowadays done automatically.

DHCP; dynamic host configuration protocol

DHCP servers answer questions "what should be my DNS server and router?"

요즘은 처음 기기 켜면 ask to local network 'hey what ip address should i use for my dns server and my router?'

또 하나 DHCP 가 하는 것 중에
tell you device(mac, phone) what ip address your device should use

how the internet works
---

http: the most popular form of internet nowadays

http: world wide web

http is a protocol that governs how web browsers and how
web servers speak.

ip: protocol that governs how computers address each other on the internet

tcp: governs how computers keep track of sequences of packets, and multiplex among different services

protocol: 
client : initiate request
server: respond request

world wide web uses the HTTP protocol which standardizes what goes inside the envelopes in order to allow a web browser to request and receive information from a web server

http: hypertext transfer protocol.
https: secure version . connection encrypted

intercept packet 해도 무슨 말인지 이해 못하도록.

example url:
https://www.example.com/

마지막 /: the default page for the website ("the root" web page)
마지막에 /path: a path (file,folder)
마지막에 /file.html  요즘은 숨기는 경향 있음. 
마지막에 /folder/file.html

즉, 이 마지막 부분은 누군가의 하드 드라이브의 폴더,파일의 위치에 대한 정보.

www.example.com 부분
: fully qualified domain name (full domain name)
www: host name. the name of a specific server that lives somewhere
that lives somewhere in that domain.
(human convention)

대부분 www로 시작하지만 굳이 안 써도 됨.

www add/remove 가능.

.com : top level domain

com: commercial

.ai 도 국가 코드인데 ai 처럼 사용 ㅋㅋ

https: scheme, the protocol. 

.edu 사용하려면 기관으로부터 인증 받아야 함.

----
GET POST

2 different ways to request a server 
= 2 different ways to format requests inside the envelope

1 GET: just getting info
2 POST: sending info

---
GET

http messages
```
GET / HTTP/2
Host: www.harvard.edu
...
```
원하는 정보가 GET 다음에 오는 / (default page)
HTTP/2: version of http
Host: www.harvard.edu : http header


server에서 오는 답변은
```
HTTP/2 200
Content-Type: text/html
...
```
$ curl -I https://www.harvard.edu/

curl: connct to url

curl: simmulate being a browser

status code: 301: redirect. 

status code: 404 file is not found. 아!

3: redirect

4: client 잘못

5: 서버 잘못

----

http://safetyschool.org/
: yale로 감ㅋㅋ

---

HTML; markup lang

연산은 못함.
2 concepts in HTML
tags
attributes

----

http-server 뭐야? 이 부분 어렵다

$ http-server

open tag, close tag, attribute can have value. 
children. element!

parser: browser can be seen as parser

js 는 그 트리를 업데이트함.

phishing: socially engineered.

----
meta로 sns preview 만들기 
--
https://www.example.com/path?key=value&key=value

---
```
<form action="https://www.google.com/search" method="get">
  <input name="q">
  <button>Search</button>
</form>
```
구글 검색 페이지 됨
--



----
<input> 태그 한 번 읽어보는 것도 재밋네


---
regular expressions (regex) 잘 모르겟음

```
<form action="https://www.google.com/search" pattern=".+@.+\.edu"  method="get">
  <input name="q">
  <button>Search</button>
</form>
```
but browser can't be trusted 클라이언트 잘못된 반응 막기에 부적절.
dev tool에서 pattern 바꿀 수 있음 ㅋㅋ
----
client side validation is not safe!
---


validator.w3.org

---
css

terms
properties!! (not attributes)
selectors (select tag)
-type selector
-class selector
-ID selector
-attribute selector

----
html entities

---
semantic tags.
---
bootstrap link tag로 연결한 거
---
JS

html onsubmit: 제출 시 js code 쓸 수 있음

<script> 태그
```
<head>
<script>
function greet()
{
  alert('hello, ' + document.querySelector('#name').value);
}
</script>
</head>
```

```
<script>
document.querySelector('form').addEventListener('submit', function(event) {
alert('hello' + document.querySelector('#name').value);
event.preventDefault();
})
</script>

```

```
<script>
document..addEventListener('DOMContentLoaded', function(event) {
document.querySelector('form').addEventListener('submit', function(event) {
alert('hello' + document.querySelector('#name').value);
event.preventDefault();
})
</script>
```
DOMContentLoaded: 돔 다 로딩됐을 때 실행해라

---
window objec
navigator object
