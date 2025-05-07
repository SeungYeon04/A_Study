form 태그 중요  
객체들이 중요  
name형태로 값을 던짐  
  
GET방식 POST방식 있음  
  
셀렉트 태그로  
연락처 010 대신 통신사 이름 ㄱㄱ  
SKT, KT, LG  
밑에 주소도 셀렉트 태그로  
  
### form03.jsp 
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
	<h3>회원가입</h3>
	<form action="#" name="member" method="post"></form>
	<p>아이디: <input type="text" name="id" checked>
	<input type="button" value="아이디 중복 검사">
	<p>비밀번호: <input type="password" name="passwd">
	<p>이름: <input type="text" name="name">
		
	<p>연락처: 
		<!-- 여기 통신사 추가 -->
		<select name="phone1">
			<option value="KT">KT</option>
			<option value="SKT">SKT</option>
			<option value="LG">LG</option>
			<option value="KT">알뜰KT</option>
			<option value="SKT">알뜰SKT</option>
			<option value="LG">알뜰LG</option>
		</select>
	
		<input type="text" maxlength="4" size="4" name="phone1"> - 
		<input type="text" maxlength="4" size="4" name="phone2"> -
		<input type="text" maxlength="4" size="4" name="phone3">

	<form action="#" method="get">
		<p>주소: <select name="city" size="3">
			<optgroup label="서울시">
				<option value="서초구">서초구</option>
				<option value="강남구">강남구</option>
				<option value="송파구">송파구</option>
			</optgroup>
			<option value="경기도">경기도</option>
			<option value="인천시">인천광역시</option>
			<option value="충청도">충청도</option>
			<option value="전라도">전라도</option>
			<option value="경상도">경상도</option>
		</select>
	</form>
		
		
	<p>성별: <input type="radio" name="sex" value="남성" checked> 남성 
	<input type="radio" name="sex" value="여성" checked> 여성 
		
	<p>취미: 독서<input type="checkbox" name="hobby1" checked>
		운동<input type="checkbox" name="hobby2">
		영화<input type="checkbox" name="hobby3">
		
		
	<p><textarea name="comment" cols="30" rows="3" placeholder="가입인사를 입력해주세요."></textarea>
	
	<p><input type="submit" value="가입하기">
	<input type="reset" value="다시쓰기">
</body>
</html>
```
