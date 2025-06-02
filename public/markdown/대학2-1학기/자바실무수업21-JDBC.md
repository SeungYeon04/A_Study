### 디자인패턴 = 싱글톤 
  
헤헿헤헤 24시 공뷰 갠프 마나이이  
  
MySQL에 Pos DB만들고  
제품에 대한 테이블 만들었었다.  
라이브러리 연결 디비커넥트 연결해서  
테스트해보았다.  
  
DB 연결 성공  
DB연결 해제중...  
DB연결 완료  
  
완료가 안뜨면 dbDriver, dbUrl, dbUser, dbPwd 보고  
라이브러리 연결 보아라  
이제 CRUD기능 구현  
  
싱글톤 사용  
객체를 하나만 생성해서  
여러곳에서 자원을 공유해서 씀  
그게 private 해서 그 안에서 필요로 하는데서  
get 처럼 쓰는 듯.  
  
MVC패턴이란 용어 들어봤어?  
디비 쿼리랑 크루드비즈니스로직  
다 한번에 했었거든? 디자이너가 디자인코드만 찾기 어려웠음  
분리해놓는 게 관리(유지보수)하기 쉬움. 자기꺼만 하면 되니  
웹 중에 MVC 있음  
M model모델 V view뷰 C controller컨트롤러  
    
### 싱글톤 코드 
```

public class ItemDAO {
	/** 싱글톤 코드 */
	
	private ItemDAO() { //싱글톤 어디서든 만들어서 동시에 하는 걸 방지 publicX privateO
		
	}
	
	private static ItemDAO instance = new ItemDAO(); //객체생성에서 private static로 빌려쓰게 해줌 
	
	public static ItemDAO getinstance() {
		return instance;
	}
}
```
  
크루드에 public이면 데이터베이스가 접근하면 시점이 동시가 되기에 충돌남 여러 클라이언트 오고 하니 
객체생성을 내부에서만 진행하는 게 싱글톤이에요  
그거에 대한 문제를 없애주는 거  
  
static 메소드 할 거면 static을 불러와야 함.  
  
만들어진 걸 get인스턴스를 이용해서 불러쓰기  
  
*** 
  
DBconnect.java꺼 커넥트 리턴해서 권한만 넘기는 거  
static이니 . 찍어서 불러오기  
conn = DBconnect.connect();  
  
저번주 코드랑 이어서  
  
### ItemDAO.java  
```
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class ItemDAO {
	/** 싱글톤 코드 */
	
	private ItemDAO() { //싱글톤 어디서든 만들어서 동시에 하는 걸 방지 publicX privateO
		
	}
	
	private static ItemDAO instance = new ItemDAO(); //객체생성에서 private static로 빌려쓰게 해줌 
	
	public static ItemDAO getinstance() {
		return instance;
	}
	
	//버튼 누르면 getAllItems() 얘 호출  ArrayList<Item> 
	//1. 전체 상품 조회 및 리스트 저장 (버튼하고 연결될 스크립트) 
	public ArrayList<Item> getAllItems() throws Exception  {
		ArrayList<Item> list = new ArrayList<Item>();
		
		Connection conn = null; 
		Statement stmt = null; 
		ResultSet rs = null; 
		String sql = "select * from item"; 
		
		conn = DBconnect.connect(); //다른코드에서 가져오기 권한 
		stmt = conn.createStatement(); 
		rs = stmt.executeQuery(sql); //셀렉트문 던지고 rs에 넣기 
		
		Item item = new Item(); //null값이면 객체생성된 게 아님 빈객체.  
		
		while (rs.next()) {
			int id = rs.getInt("id");
			String item_name = rs.getString("item_name"); 
			int item_stock = rs.getInt("item_stock"); 
			int item_price = rs.getInt("item_price"); 
			
			//get 값가져오기 set 값세팅하는거 
			item.setId(id);
			item.setItem_name(item_name);
			item.setItem_stock(item_stock); 
			item.setItem_price(item_price); 
			list.add(item); //item 빈데다가 저장하기 
			item = new Item(); //다시 아이템 비워두기. 다른 새 아이템 와도 
			
		}
		
		rs.close(); 
		conn.close();
		stmt.close(); 
		
		return list;
	}	
}
```
  
### TestDAO.java 
```
import java.util.ArrayList;

public class TestDAO {

	// ItemDAO 테스트클래스 
	public static void main(String[] args) throws Exception {
		//객체생성이 아닌 생성된 걸 ItemDAO로 넣어 빌려쓰기 
		ItemDAO instance = ItemDAO.getinstance();
		
		ArrayList<Item> list = new ArrayList<Item>(); 
		instance.getAllItems(); //리스트니까 리스트로 받기 
		list = instance.getAllItems(); 
		
		System.out.println("아이디"+"\t"+ "상품명"+"\t"+"재고량"+ "\t"+"상품재고");
		for(Item item : list) { //아이템을 list에서 받아오고싶다. 알아서 순회하여 item에 집어넣음 
			System.out.println(item.getId()+"\t"+item.getItem_name() + "\t" + item.getItem_stock() + "\t" + item.getItem_price());
		}
		
		//이미 DBconnect안에서 다 클로즈 함.. 
		//DBconnect.close(); 
	}
}
```
  
*** 
  
### ItemDAO.java
```
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

public class ItemDAO {
	/** 싱글톤 코드 */
	
	private ItemDAO() { //싱글톤 어디서든 만들어서 동시에 하는 걸 방지 publicX privateO
	}
	
	private static ItemDAO instance = new ItemDAO(); //객체생성에서 private static로 빌려쓰게 해줌 
	
	public static ItemDAO getinstance() {
		return instance;
	}
	
	//버튼 누르면 getAllItems() 얘 호출  ArrayList<Item> 
	// 1. 전체 상품 조회 및 리스트 저장 (버튼하고 연결될 스크립트) 
	public ArrayList<Item> getAllItems() throws Exception  {
		ArrayList<Item> list = new ArrayList<Item>();
		
		Connection conn = null; 
		Statement stmt = null; 
		ResultSet rs = null; 
		String sql = "select * from item"; 
		
		conn = DBconnect.connect(); //다른코드에서 가져오기 권한 
		stmt = conn.createStatement(); 
		rs = stmt.executeQuery(sql); //셀렉트문 던지고 rs에 넣기 
		
		Item item = new Item(); //null값이면 객체생성된 게 아님 빈객체.  
		
		while (rs.next()) {
			int id = rs.getInt("id");
			String item_name = rs.getString("item_name"); 
			int item_stock = rs.getInt("item_stock"); 
			int item_price = rs.getInt("item_price"); 
			
			//get 값가져오기 set 값세팅하는거 
			item.setId(id);
			item.setItem_name(item_name);
			item.setItem_stock(item_stock); 
			item.setItem_price(item_price); 
			list.add(item); //item 빈데다가 저장하기 
			item = new Item(); //다시 아이템 비워두기. 다른 새 아이템 와도 
			
		}
		
		rs.close(); 
		conn.close();
		stmt.close(); 
		
		return list;
	}
	
	// 2. 전체 상품명 조회 및 리스트 저장 (이름만) 
	public ArrayList<String> getAllItemNames() throws Exception { //이름만 갖고오니 리스트<스트링>
		ArrayList<String> list = new ArrayList<String>(); 
		ArrayList<Item> ilist = new ArrayList<Item>(); 
		
		ilist = getAllItems(); //예외처리는 메소드로 throws Exception 
		
		for(Item item : ilist) { //ilist에서 item객체 받아오라?
			list.add(item.getItem_name()); 
		}
		
		return list;
	}
	
	/** 깜짝문제 1. 재고량전체출력 getAllStocks() 2. 제품단가전체출력 getAllPrice() */
	public ArrayList<Integer> getAllStocks() throws Exception {
		ArrayList<Integer> list = new ArrayList<Integer>();
		ArrayList<Item> ilist = new ArrayList<Item>();
		
		ilist = getAllItems(); 
		
		for(Item item : ilist) {
			list.add(item.getItem_stock()); 
		}
		
		return list; 
	}
	
	public ArrayList<Integer> getAllPrice() throws Exception {
		ArrayList<Integer> list = new ArrayList<Integer>();
		ArrayList<Item> ilist = new ArrayList<Item>();
		
		ilist = getAllItems(); 
		
		for(Item item : ilist) {
			list.add(item.getItem_price()); 
		}
		
		return list;
	}	
}
```
  
### TestDAO.java 
```
import java.util.ArrayList;

public class TestDAO {

	// ItemDAO 테스트클래스 
	public static void main(String[] args) throws Exception {
		//객체생성이 아닌 생성된 걸 ItemDAO로 넣어 빌려쓰기 
		ItemDAO instance = ItemDAO.getinstance();
		
		ArrayList<Item> list = new ArrayList<Item>(); 
		instance.getAllItems(); //리스트니까 리스트로 받기 
		list = instance.getAllItems(); 
		
		System.out.println("아이디"+"\t"+ "상품명"+"\t"+"재고량"+ "\t"+"상품재고");
		for(Item item : list) { //아이템을 list에서 받아오고싶다. 알아서 순회하여 item에 집어넣음 
			System.out.println(item.getId()+"\t"+item.getItem_name() + "\t" + item.getItem_stock() + "\t" + item.getItem_price());
		}
		
		System.out.println();
		System.out.println("상품명 전체출력");
		
		//getAllItemNames()는 Array 에 String 타입이니 그렇게 받아라 
		ArrayList<String> item_names = new ArrayList<String>(); //item_names 이름 바꿔도 될지도..? 
		item_names = instance.getAllItemNames();
		
		for(String name: item_names) {
			System.out.println(name);
		}
		
		System.out.println();
		System.out.println("상품재고량 전체출력");
		ArrayList<Integer> item_stocks = new ArrayList<Integer>(); 
		item_stocks = instance.getAllStocks();
		
		for(Integer stock: item_stocks) {
			System.out.println(stock);
		}
		
		System.out.println();
		System.out.println("상품가격 전체출력");
		ArrayList<Integer> item_prices = new ArrayList<Integer>(); 
		item_prices = instance.getAllPrice();
		
		for(Integer price: item_prices) {
			System.out.println(price);
		}
	}
}
```
  
### Item.java 
```
public class Item { //데이터클래스, Spring가면 테이블클래스 엔티티클래스라 함. 
	// DB의 테이블데이터 받을 공간들 
	private int id; 
	private String item_name;
	private int item_stock; 
	private int item_price;
	
	//getter setter 
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getItem_name() {
		return item_name;
	}
	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}
	public int getItem_stock() {
		return item_stock;
	}
	public void setItem_stock(int item_stock) {
		this.item_stock = item_stock;
	}
	public int getItem_price() {
		return item_price;
	}
	public void setItem_price(int item_price) {
		this.item_price = item_price;
	} 
}
```
  
### DBconnect.java 
```
import java.sql.Connection;
import java.sql.DriverManager;

public class DBconnect {

	// 교슈님 해커톤 백엔드 누구 ㄱㅊ나요 / 안되면 이부분 잘 보기 
	public static final String dbDriver = "com.mysql.cj.jdbc.Driver"; 
	public static final String dbUrl = "jdbc:mysql://localhost:3306/pos?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF8"; //serverTimezone=UTC : 현재타임
	public static final String dbUser = "root";
	public static final String dbPwd = "1234"; 
	public static Connection conn = null; 
	
	//테스트를 위한 임시 메인 
	public static void main(String[] args) {
		//DB MySQL쓰다가 오라클 바꿔봤음 좋겠다. 
		connect(); 
		close(); 
	}
	
	public static Connection connect() { //Connection으로 리턴해줘야 다른 메소드에서 권한 받아 쿼리날릴 수 있음(셀렉트 등) 
		try {
			Class.forName(dbDriver);
			//conn != null 이어야 권한값이 저장된 거 
			conn = DriverManager.getConnection(dbUrl, dbUser, dbPwd); //연결 
			
			if(conn != null) {
				System.out.println("DB 연결 성공");
			}
			
		} catch (Exception e) {
			System.out.println("DB 연결 오류");
		}	
		return conn;
	}
	
	public static void close() {
		try {
			if(conn != null) {
				System.out.println("DB연결 해제중...");
				conn.close();
				System.out.println("DB연결 완료");
			}
		}  catch (Exception e) {
			System.out.println("DB연결 해제 시 오류");
		}
	}
}
```
  
### TestDAO에서 실행 결과 
```
DB 연결 성공
DB 연결 성공
아이디	상품명	재고량	상품재고
1	상품이름짹	100	1000
2	앵무새보고싶다물건	200	2000
3	DBA돈마니버러오라클	300	3000

상품명 전체출력
DB 연결 성공
상품이름짹
앵무새보고싶다물건
DBA돈마니버러오라클

상품재고량 전체출력
DB 연결 성공
100
200
300

상품가격 전체출력
DB 연결 성공
1000
2000
3000
```
  
