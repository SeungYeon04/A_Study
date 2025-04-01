![파일경로](https://seungyeon04.github.io/A_Study/markdown/대학2-1학기/파일경로01.png)  
  
### Book.java  
```
package ch04.com.dao;

import java.io.Serializable;

public class Book implements Serializable {
	public static final long serialVersionUID = -427400572038677000L;
	private String bookId; //도서 id 
	private String name; //도서명 
	private int unitPrice; //가격 
	private String author; //저자 
	private String description; //설명 
	private String publisher; //출판사 
	private String category; //분류 
	private long unitsInStock; //재고수 
	private String releaseDate; //출판일 (월/년) 
	private String condition; //신제품 or 구제품 or 리퍼브제품 
	
	public Book() {
		super();
	}
	
	public Book(String bookId, String name, Integer unitPrice) {
		this.bookId = bookId; 
		this.name = name; 
		this.unitPrice = unitPrice; 
	}

	public String getBookId() {
		return bookId;
	}

	public void setBookId(String bookId) {
		this.bookId = bookId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(int unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public long getUnitsInStock() {
		return unitsInStock;
	}

	public void setUnitsInStock(long unitsInStock) {
		this.unitsInStock = unitsInStock;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}
}
```
  
### BookRepository.java 
```
package ch04.com.dao;

import java.util.ArrayList;

public class BookRepository {
	private ArrayList<Book> listOfBook = new ArrayList<Book>();
	
	public BookRepository() {
		Book bookclass01 = new Book("ISBN1234", "C# 로 시작한 모험", 19000); 
		bookclass01.setAuthor("이승연");
		bookclass01.setDescription("유니티로 1인 개발에서 출시 후 사장까지의 노력이 담긴 스토리 모험집");
		bookclass01.setPublisher("앵무아카데미");
		bookclass01.setCategory("컴퓨터(IT)/통신");
		bookclass01.setUnitPrice(19000); 
		bookclass01.setReleaseDate("2025-03-24"); 
		
		Book bookclass02 = new Book("ISBN1235", "Java의 앵무새 객체 다루기", 5000); 
		bookclass02.setAuthor("잉은비"); 
		bookclass02.setDescription("사람보단 앵무새가 낫다 생각한 저자는. 자바로 객체를 다루어 앵무새를 표현하였다."); 
		bookclass02.setPublisher("앵무아카데미");
		bookclass02.setCategory("컴퓨터(IT)/통신");
		bookclass02.setUnitPrice(5000); 
		bookclass02.setReleaseDate("2023-00-00");
		
		Book bookclass03 = new Book("ISBN1236", "React를 이용한 웹 게임을 제작해보자. (서버 몰루)", 20000); 
		bookclass03.setAuthor("방형석"); 
		bookclass03.setDescription("많이 쓰는 프레임워크 프론트부터 해보는 것\n밥줄 코딩을 해보자"); 
		bookclass03.setPublisher("밥줄아카데미");
		bookclass03.setCategory("컴퓨터(IT)/통신");
		bookclass03.setUnitPrice(20000); 
		bookclass03.setReleaseDate("2025-03-10");
		
		listOfBook.add(bookclass01); 
		listOfBook.add(bookclass02); 
		listOfBook.add(bookclass03); 
	}
	
	public ArrayList<Book> getAllBooks() {
		return listOfBook;
	}
}
```
  
### books.jsp 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import = "java.util.ArrayList" %>
<%@ page import = "ch04.com.dao.Book" %> <!-- Book 앞에 붙는 건 패키지 이름임 -->
<jsp:useBean id="bookDAO" class="ch04.com.dao.BookRepository" scope="session"/>
<html>
<head>
<meta charset="UTF-8">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha/dist/css/bootstrap.min.css" rel="stylesheet">
<title>도서목록</title>
</head>
<body>
	<%@ include file="menu.jsp" %>
	
	<div class="p-5 mb-4 bg-body0tertiary rounded-3"> 
		<div class="container-fluid py-5">
			<h1 class="display-5 fw-bold">도서목록</h1>
			<p class="col-md-8 fs-4">BookList</p>
		</div>
	</div>
	<%
		ArrayList<Book> listOfBooks = bookDAO.getAllBooks();
	%>
	
	<div class="row align-items-md-stretch text-center">
		<%
			for(int i = 0; i < listOfBooks.size(); i++){ //for문 시작 
				Book book = listOfBooks.get(i); 
		%>
		<div class="col-md-4">
			<div class="h-100 p-2"> 
				<h5><b><%=book.getName() %></b></h5>
				<p><%=book.getAuthor() %></p>
				<br><%= book.getPublisher() %>
				<p><%=book.getPublisher() %> | <%=book.getUnitPrice() %>원</p>
				<p><%=
				book.getDescription().length() > 60 //예외처리: 길이가 60을 넘으면 true 적으면 flase
				? book.getDescription().substring(0,60) + "..." //60까지만 자른다 
				: book.getDescription() 
				%></p>
				<p><%=book.getUnitPrice() %>원</p>
			</div>
		</div>
		<%
			} //for문의 끝 
		%>
	</div>
	<%@ include file = "footer.jsp" %>
</body>
</html>
```
  
### menu.jsp (저번과제) 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container py-4">
	<header class="pb-3 mb-4 border-bottom">
		<a href="./welcome.jsp" class="d-flex align-items-center text-dark text-decoration-none">
		<svg width="32" height="32" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
    	<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
   		<path d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
		</svg>
			<span class="fs-4">Home</span>
		</a>
	</header>
</div>
</div>
</body>
</html>
``` 
  
### footer.jsp (저번과제) 
```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<footer class="pt-3 mt-4 text-body-secondary border-top">
	&copy; Bookmarket
</footer>
```
  
