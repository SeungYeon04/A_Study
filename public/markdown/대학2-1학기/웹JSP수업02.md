%는 변수나 메소드를 정의하는 부분이다.  
태그 + 텍스트 + css + js + java + %종류  
  
1. <%! int count=3; String makeItLower(String data) { return data.toLowerCase(); } %> 선언문  
2. <%= makeItLower("hello world") %> 표현문 (웹에 출력)  
3. <% out.println(++count); %> 스크립틀릿태그  
4. <%-- 주석 --> (주석)  
5. <%@ %> 디렉티브 태그  
ㄴ <%@ page ... %>, <%@ include ... %>, <%@ taglib ... %>  
  
*** 
  
### F5 누를 때마다 count 늘리기 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Scripting Tag</title>
</head>
<%-- 선언문 태그 [메소드] --%>
<%! int count = 0; %>
<body>
	Page Count is 
	<%--스크립틀릿태그 --%>
	
	<% 
		out.println(++count);
	%>
</body>
</html>
```
  
톰캣이 count변수를 잡아주고 있기 때문에  
웹서버 전달 계속 오도록 F5키 갈겨주면  
Page Count is 3 이거 숫자 오른다  
  
### count를 0에서 1으로 ++ 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Scripting Tag</title>
</head>
	Page is Count: 
	
	<%-- 스크립틀릿 태그 --%>
	<% out.print(myMethod(0)); %> 
	
	<%-- 선언문 태그 [메소드] --%>
	<%! public int myMethod(int count){ return ++count; } %>
</body>
</html>
```
  
### 2+3 출력 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Scripting Tag</title>
</head>
	<%-- 선언문 --%>
	<%! int sum(int a, int b){ return a+b; } %> 
	<%-- 로직 스크립틀릿 --%>
	<% out.println("a + b = " + sum(2 ,3));  %>
</body>
</html>
```
  
### 지역변수 count 0 -> 1 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Scripting Tag</title>
</head>
<% int count=0; %>
<body>	
	Page Count is
	<% out.println(++count); %>
</body>
</html>
```
안 오르는 이유 지역변수 새로고침 됨  
  
### 짝수출력 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Scripting Tag</title>
</head>
<body>	
	<%
		for(int i=0; i <= 10; i++){
			if(i % 2 == 0) {
				out.println(i + "<br>");
			}
		}
	%>
</body>
</html>
```
ln을 했는데 띄어지고 br을 했더니 줄바꿈이 되네  
값은 0 2 4 6 8 10 뜸.  
  
### Date 값 출력 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Scripting Tag</title>
</head>
<body>	
	<p>Today's date: <%= new java.util.Date() %></p>
</body>
</html>
```
Today's date: Mon Mar 17 15:02:59 KST 2025
  
### 표현문으로 a+b+c 출력 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Scripting Tag</title>
</head>
<body>	
	<%-- 변수 a b c에 스크립틀릿 태그로 저장 --%>
	<% 
		int a = 10; 
		int b = 20; 
		int c = 30; 
	%>
	<%-- 출력하는 표현문 --%>
	<%= a+b+c %>
</body>
</html>
```
  
우리가 라이브러리를 가져다 쓰는 건  
함수를 가져다 쓰겠다는 것이다.  
  
### Date로 디렉티브 태그 연습 
```
<%@ page contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Directives Tag</title>
</head>
<body>	
	<%@ page import = "java.util.Date" %>
	Todays is <%= new Date() %>
</body>
</html>
```
대략  
<%@ page isELIgnored="true"  %>  
이런 스타일도 있고  
  
*** 
  
### errorString.jsp 
```
<%-- page_errorPage.jsp 읽어오기 --%>
<%@ page errorPage="page_errorPage.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Directives Tag</title>
</head>
<body>	
	<%
		String str = null; 
		out.println(str.toString());
	%>
</body>
</html>
```
  
### page_errorPage.jsp 
```
<%@ page contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<title>Directives Tag</title>
</head>
<body>
	<h4>error Page 디렉티브 태그</h4>
	에러가 발생했습니다. 
</body>
</html>
```
  
*** 
  
### NewFile01.jsp 
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
	<%@ include file="include02_header.jsp" %>
	<p>방문해주셔서 감사합니다.</p>
	<%@ include file="include02_footer.jsp" %>
</body>
</html>
```
  
### include02_header.jsp 
```
<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%! 
		int pageCount = 0; 
		void addCount() {
			pageCount++; 
		}
	%>
	<%
		addCount();
	%>
	<p>이 사이트 방문은 <%=pageCount %>번째 입니다.</p>
</body>
</html>
```
  
### include02_footer.jsp 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
Copyright ⒸJSPBook
```
  
이 사이트 방문은 1번째 입니다.  
방문해주셔서 감사합니다.  
Copyright ⒸJSPBook  
  
*** 
  
JSP 너무 뭐 많아서  
JSTL(JSP Standaer Tag Library) : JSP 간추린 버전  
그대신 태그라이브러리로 불러줘야함  

