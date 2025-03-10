 
#### 미리 쇼핑몰 틀 만들어두는 게 좋을 듯 
  
중간고사 없음  
기말고사 쇼핑몰 프로젝트 제작 기말대체  
상황 봐서 오픈북 할 수도  
  
JSP 과목: 쇼핑몰 만들기.  
  
프로젝트 3개  
  
연습용 쇼핑몰  
하나는 책에 나오는 북마켓이라는 끝에 있는 프로젝트  
본인의 쇼핑몰 임의로 만들게 던져줌  
  
북마켓 끝날 쯤 주제 던져줌  
분류는 다 다르게 안 겹치는 주제로  
자유주제로 안 겹치는 할 예정 책, 옷가게 등  
미리 틀 만들어두면 좋을 듯.  
JSP랑 JAVA 잘 해두자  
  
*** 
  
#### 웹서버  
아파치(웹서버프로그래머 실무에서 자주 쓴다셨다.)  
톰캣(이번 수업은 교육용으로 이것 사용)  
IIS  
  
#### 정적 페이지(텍스트)  
HTML  
  
#### 동적 페이지  
PHP JSP 등..  
  
*** 
    
1학기 석진 교수님: HTML 날밤새서 하지마 JAVA C 날밤새서 해  
  
JSP : 틀은 HTML 동작은 JAVA 자바코드 <% %>로 씀  
써블릿 : JAVA틀에 HTML이 서브로 삽입함 HTML태그를 (" ")로 씀  
  
일반 쇼핑몰은 JSP  
공공기관이면 써블릿  
  
교수님이 JSP 틀 몽땅 있고 거기 자바 들어감.  
HTML 잘 모르면 하고 오세요 특히 form 태그 정도는..  
HTML이랑 JAVA 둘 다 잘 해야한다.  
  
Hello.jsp 확장자.  
  
*** 
  
### JSP 개발환경도구  
  
개발환경: JDK(오라클이 인수함 오라클페이지ㄱㄱ)  
웹서버 : 톰캣(경로만 좀 신경 쓰면 됨)  
통합개발환경: 이클립스  
  
*** 
  
목차  
  
배울 거 세 분류  
스크립트태그, 디렉티브태그, 액션태그  
  
***
  
### 배워야 될 것 3가지 핵심 
  
스크립트 태그  
선언문, 스크립틀릿, 표현문  
  
디렉티브태그 
<%@ ... %>  
골뱅이 들어가면 디렉티브  
page <%@ page 속성1="값1" 속성2=값2 %>,  
include <%@ include file="파일명" %>,  
taglib <%@ tablib url="경로" prefic="태그식별자" %>  
  
액션태그  
<jsp: .... />  
forward, include, param, uaeBean, setProperty,  
getProperty, param, 자바빈즈  
(여기 양이 많아서 복잡함.)  
  
*** 

### JDK 설치하기 
저번 자바시간에 설치해서 애매  
이클립스 설치할 때 옆에꺼..  
  
cmd에서 java --version 쳤을 때 버전 나오면 됨.  
  
### 이클립스 업데이트부분 설치됐나 확인하기  
Help > Install New SoftWare... >  
대략 3번째쯤 선택 2024-12- ...>  
맨 아래쯤까지 내리면 Web, XML, Java EE and...의 내용들 설치  
(설치 후 재시작하면 Web, XML.. 옵션들이 All items are installed라 뜰 것임.)  
  
### 톰캣 설치하기  
https://tomcat.apache.org  
https://tomcat.apache.org/download-10.cgi  
64-bit Windows zip (pgp, sha512) 로 설치  
  
apache-tomcat-10.1.39-windows-x64.zip을  
C드라이브에 있는 apache-tomcat-10.1.39에 압축 풀어 넣기  
  
### 톰캣 이클립스 연동하기 (Server) 
  
File > New > Other... > Server 생긴 것 누르기 > Next >  
Apache 에서 v10.1 버전 선택  
(ServerName: Tomcat v10.1 Server at localhost) >  
tomcat를 옮긴 C / apache-tomcat-10.1.39로 경로설정  
(Tormcat installation directory: C:\apache-tomcat-10.1.39) >  
  
이제 다음하면 이클립스에 Server폴더 자동생성 될 것임.  
  
#### Server 연결상태 확인하기 

Window > Prefernes > Prefernes 창에서  
Sever > Rintime Environments 에서 서버등록 확인.  
  
### 인코딩 상태 확인하기 

Window > Prefernes > Web(업데이트 설치 되면 나옴) >  
JSPFile 부분 UTF-8로 되어있어야 함.  
  
### 프젝 만들기 

File > New > Other... > Web 검색해서  
Dynamic Web Project 선택 > 아래 세팅들 아파치 버전 잘 골라져 있으면 됨.  
  
거기서 New > JSP File > webapp에 Hello.jsp  
  
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Hello SJP!!</h1>
	Hello! Java Server Pages.<br>
	힝구
</body>
</html>
```
  
*** 
  
### 실행 관련 
Run 하면서 설치한 10.. 서버 선택하고, 창 아래 체크  
Always use this server when running this project  
그러면 자동으로 서버도 켜진다나 함.  
  
8080 8000 이런 포트오류 뜨면 전꺼 충돌이라,  
이클립스나 톰캣 싹 지워야 함.  
아니면 톰캣 중복설치 등 문제..  
  
*** 
  
### 2025.03.10 숙제 
47쪽의 Hello JSP 해서  
자기 노트북, 컴퓨터로 세팅 후  
캡쳐해서 원본파일 올리기  
  
