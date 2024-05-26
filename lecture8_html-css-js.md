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


