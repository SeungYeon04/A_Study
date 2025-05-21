### DB의 기본 
DB의 크루드 C: Create R: Reader U: Update D: Delete  
생성 읽기 수정 삭제가 기본 = 크루드서비스  
  
JSP: 웹에서 동작하는 크루드서비스를 거서 할 거고  
랩실에 있는 애들은 땡겨서 할 거고  
구현 많고 프레임워크 탬플릿 Spring에 대해 배우게 될 거야  
  
Dos운영체제 때 컴터 커서만 깜빡깜빡 많이 했지  
  
여러분 개인 서버프로그램  
여러분 서버로 남이 들어오게 하기  
자기 컴을 클라이언트 + 서버로 쓸 수 있다  
데이터베이스 프로그램을 설치해야 하는데,  
  
윈도우 처음 나왔을 때 웃겼어 3.1 도스 위에서 운영되는  
어플리케이션 운영체제 92년도인데  
마우스 쓰는 사람은 혁신이야 다 가르쳐야했음 클릭  
  
어떤 학생은 그림이 떴다 사라졌다고 놀라고  
마우스 움직이다 오른쪽으로 갔다고 고장났대  
그게 92년도  
  
우리 간단하게 할 거임 자바시간이니  
프로그램 만들고 심플디비연동  
  
DBMS(DB관리시스템) -> 오라클 엔지니어 8천 이상  
DBA(DB관리자) -> 사용자에게 계정주고 잊으면 문제체크 모니터링 후 주고  
서버 네트워크 알아야 함. SE포함 4천이상 영업도 잘함 8천 이상  
데이터 잘못되면 술 먹다가도 뛰어가야하는 거임. 책상 치우던  
빠르고꼼꼼책임 리눅스 쉘스크립트 렝귀지 쿼리 SQL문  
  
DBA 그 이후 몸값 ->  
1. 튜너(성능향상 SQL쿼리 방대한 빠른데이터 되게. 쿼리능통 코어이해 그만큼 해박해라),  
2. 모델러
  
1. 오라클  
2. MySQL -> 교육용  
3. 마이크로소프트 SQL  
...  
  
*** 
  
### My SQL 다운로드 
https://dev.mysql.com/downloads/installer/  

아래꺼 설치 Windows (x86, 32-bit), MSI Installer  
No thanks, just start my download.  
  
#### 비밀번호 
MySQL Root Password: 1234  
Repeat Password: 1234  
교육용이니까 일단 쉽게  
  
***  
  
Ctrl Alt Del (Ctrl + Shift + esc나) -> 작업관리자 -> 서비스  
ABCD로 Sort되어있을 거임  
컴터 꺼지면 들어가는 그곳 왠지 보여주심  
  
cd = 체인지 디렉토리  
  
### 질의어 종류 참고 두 개 
DDL: DataBase 데피니스(정의) <- 우리가 할 거  
생성 수정 삭제 기능 = 우리가 오늘 하는 거  
구조 바뀌는 어  
DDM: 매니큘레이션(조작)  
  
*** 
  
cd C:\Program Files\MySQL\MySQL Server 8.0\bin (있어야됨)  
mysql -u root -p  
  
(mysql> 로 들어와서)  
show databases;  
  
create database haksa;  
  
show databases;  
  
```
빈껍데기 보관장소 만들어짐 (학사테이블) 
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| haksa              |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```
  
use haksa;  
  
show tables;  
  
create table student(name varchar(10) not null, id varchar(10) not null primary key); (테이블 만들기)  
  
desc student;  (테이블보기)  
  
```

mysql> desc student;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| name  | varchar(10) | NO   |     | NULL    |       |
| id    | varchar(10) | NO   | PRI | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```
  
alter table student add column dept varchar(10); (데이터추가)  
  
alter table student drop column dept; (삭제)  
  
desc student; (확인)  
  
#### [입력-C]
insert into student values("kslee", "2024001"); (varchar이니 문자)  
  
insert into student values("tsgoo", "2024002");  
  
insert into student values("smjeon", "2024003");  
  
#### [조회-R] 
select * from student;  (검색은 : where 에다가 *말고 id 넣으면 됨)  
  
```
mysql> select * from student;
+--------+---------+
| name   | id      |
+--------+---------+
| kslee  | 2024001 |
| tsgoo  | 2024002 |
| smjeon | 2024003 |
+--------+---------+
```
 
``` 
JPA라는: .파인트 by id 하면 자동으로 테이블 생성해줘서  
개발자가 쿼리를 신경 쓸 필요 없는 Spring 프레임워크  
처음 보면 더 복잡해졌다지만 편해짐. 자바 쿼리가 혼잡해져서  
쿼리 코드 같이 하면 쿼리만 문제되어도 오류나서  
따로 하는 패턴도 있다 무슨 디자인패턴? 프레임워크?  
```
  
#### [수정-U] 
update student set id="2024004" where name="kslee";  
  
select * from student;  
  
#### [삭제-D] 
쏘 심플한 크루드 쿼리 문법이다.  
  
ex) delete from student (모두삭제 - 터치X)  
  
delete from student where id ="2024002";  
  
*** 
  
### JAVA 커넥터 설치 

#### 코드 <-> DB 연결점(커넥터) 설치 관련 
```
JDBC 자바와 DB를 연결해주는 코딩과 디비 연결해주는  
ODBC 도 있음 -> C#이랑 연결해준다면!  
물론 MySQL로 한다? 그러면 MySQL의 ODBC를 설치하는 등  
```
  
### 설치한 거 다운받아 프로젝트에 연결 
설치: https://dev.mysql.com/downloads/connector/j/  
-> Platform Independent 로 선택  
-> 아래꺼 Platform Independent (Architecture Independent), ZIP Archive 다운  
-> No thanks, just start my download.  
  
C:\Program Files\MySQL 에 압축 풀어서 옮기기  
mysql-connector-j-9.3.0  
  
프로젝트 생성해서 우클릭 Propertice -> Java Build Path ->  
Librarise로 선택 -> Modulepath -> Add External JARs... ->  
다운받은 .jar 연결 -> Apply  
  
