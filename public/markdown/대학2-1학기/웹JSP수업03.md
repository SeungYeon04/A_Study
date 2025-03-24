#### JSP Action Tag 문제 01   
  
### tlqkf.jsp 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Action Tag</title>
</head>
<body>
	<h2>include 액션태그</h2>
	<jsp:include page="include_data.jsp" flush="true"/>
	<p> ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
</body>
</html>
```
  
### include_data.jsp 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Action Tag</title>
</head>
<body>
	<p> 오늘의 날짜 및 시각 
	<p> <%=(new java.util.Date()).toLocaleString() %>
</body>
</html>
```
  
*** 
  
#### JSP Action Tag 문제 02 

### 02first.jsp 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Action Tag</title>
</head>
<body>
	<h3>이 파일은 first.jsp입니다.</h3>
	<jsp:include page="02second.jsp">
	<jsp:param name="date" value="<%=new java.util.Date() %>" />
	</jsp:include>
	<p>Jakarta Server Page</p>
</body>
</html>
```
  
### 02second.jsp 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Action Tag</title>
</head>
<body>
	Today is : <%=request.getParameter("date") %>
</body>
</html>
```
  
***
  
#### 자바 빈즈 규칙 

자바 클래스는 java.io.Serialzable 인터페이스 구현 필수  
인수가 없는 기본생성자 있어야 함  
모든 멤버변수인 프로퍼티는 privete접근 지정자로 설정해야 함.  
모든 멤버변수인 프로퍼티는 getter.setter() 메소드가 존재해야 함.  
(확장자 .jsp 아님 .java임)  
  
*** 
  
### 자바빈즈 참고 스타일 
```
private int id;  
private String name; 

public MemberBean(){
	public int getId() {return id;}  
	public int setId() {return id;}  
	
	public String getName() {return name;}  
	public void setName(String name) { this.name = name;}  
}
```
  
아 참고로 이상하게 하지말고  
오른쪽에 플러스 모양 눌러서  
Open Perpective 가 Web으로 되어있어야 함  
그래야 JSPBook에 Java Resources가 존재함  
  
*** 
  
### 경로사진 
![ImageJavaBean_경로사진.png](https://seungyeon04.github.io/A_Study/markdown/대학2-1학기/ImageJavaBean_경로사진.png)  
  
### Calculator.java 
```
package ch04.com.dao;

public class Calculator {

	public int process(int n) {
		return n * n * n; 
	}
	
	public static void main(String[] args) {
		//Calculator c = new Calculator();
		//System.out.println(c.process(3));
	}
}
```
  
### useBean.jsp 
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
	<jsp:useBean id="bean" class="ch04.com.dao.Calculator" />
	<%
		int m = bean.process(5);
		out.print("5의 제곱 3: " + m); 
	%>
</body>
</html>
```
  
하아ㅏㅏ아악 경로 화나요  
취업과창업, AI이해, 더불어함께하는뭐시기  
그거 말고 자바시간 더 늘려주세요  
힘드시면 교수님 달라도 괜찮아요 흑흑  
자바 주입 부탁 드립니다  
  
*** 
  
### p. 과제 147 ~ 156 쪽  
레포트 비중 출석 연동해서 많이 둠  
  
북마크, 기본주제?, 기말 자유주제  
  
JSPBooks는 연습용이고  
디자인 관계없이 잘 돌아가는지 봄 에러.  
  
*** 
  
