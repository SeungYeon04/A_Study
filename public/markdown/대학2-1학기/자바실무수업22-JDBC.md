현재 GUI지만 괜찮은 거 나옴  
드디어 좀 간지나는 거다!  
그러므로 이것도 기말에 적용하자  
  
### package DB 

#### ㄴ DBconnect.java 
```
package DB;
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
  
#### ㄴ Item.java 
```
package DB;
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
  
#### ㄴ ItemDAO.java 
```
package DB;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class ItemDAO {
	/** 싱글톤 코드 */
	
	private ItemDAO() {} //싱글톤 어디서든 만들어서 동시에 하는 걸 방지 publicX privateO
	
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
	
	//3. 사용자가 선택한 상품의 단가만 조회 
	//쿼리만 날리면 될 것을 싶어도, 언어와 연동을 위해 필요하다하심 (item_price + "원")
	public String getPrice(String item_name) throws SQLException { //특정상품의 단가라서 item_name 반환 
		Connection conn = null;
		PreparedStatement pstmt = null; //Statement는 완성된 쿼리만 실행될 수 있음. 매개변수로 미완성 완성시키는 거면 PreparedStatement 선언 
		ResultSet rs = null;
		int item_price = 0;
		
		String sql = "select item_price from item where item_name=?"; //=? 변수 받아오는 부분 item_name 받아오는 미완성쿼리 item_name=item_name
		
		//JPA 라고 직접 라이브러리로 가져와서 쓸 건데 아직 지방은 직접 만듦. JPA는 다음 학기에 언급할 거임. 
		conn = DBconnect.connect();
		pstmt = conn.prepareStatement(sql); //쿼리실행권한을 가진 앤 얘다. 미완성된 거 담아두고 아래서 완성시켜놓고 보내자 
		pstmt.setString(1, item_name); //1번째 ?에 값 넣어준다 item_name반환 
		rs = pstmt.executeQuery(); //위에서 다 지정해서 실행만 해도 잘 됨. 
		
		while(rs.next()) {
			item_price = rs.getInt("item_price"); 
		}
		
		DBconnect.close();
		return item_price + "원"; 
	}
	
	//4. 사용자가 선택한 상품의 재고량만 조회 
	public String getStock(String item_name) throws SQLException { 
		Connection conn = null;
		PreparedStatement pstmt = null; //Statement는 완성된 쿼리만 실행될 수 있음. 매개변수로 미완성 완성시키는 거면 PreparedStatement 선언 
		ResultSet rs = null;
		int item_stock = 0;
		
		String sql = "select item_stock from item where item_name=?"; //=? 변수 받아오는 부분 item_name 받아오는 미완성쿼리 item_name=item_name
		
		//JPA 라고 직접 라이브러리로 가져와서 쓸 건데 아직 지방은 직접 만듦. JPA는 다음 학기에 언급할 거임. 
		conn = DBconnect.connect();
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, item_name); 
		rs = pstmt.executeQuery(); //위에서 다 지정해서 실행만 해도 잘 됨. 
		
		while(rs.next()) {
			item_stock = rs.getInt("item_stock"); 
		}
		
		DBconnect.close();
		return item_stock + "개"; //여기서 원, 개 처리하면 나중에 숫자로 업데이트 어려워서 없애버림 
	}
	
	
	//5. 사용자가 선택한 상품의 구매수량을 반영하여 재고량 업데이트 
	public void updateStock(String total, String count, String item_name) throws Exception {
		Connection conn = null;
		PreparedStatement pstmt = null; //Statement는 완성된 쿼리만 실행될 수 있음. 매개변수로 미완성 완성시키는 거면 PreparedStatement 선언 
		ResultSet rs = null;
		
		String sql = "update item set item_stock=?-? where item_name=?"; //total - count and인가 item_name=item_name

		conn = DBconnect.connect();
		pstmt = conn.prepareStatement(sql); 
		
		//?에 값을 채워준다. 
		pstmt.setString(1, total); 
		pstmt.setString(2, count); 
		pstmt.setString(3, item_name); 
		int r = pstmt.executeUpdate(); //완성된 쿼리 실행 얘는 select아니니 업데이트 

		if(r>0) {
			System.out.println("재고량 업데이트 성공 (0!=)");
		}
		
		DBconnect.close();
	}
	
	//6. 관리자모드 상품추가 
	public boolean insertItem(Item item) throws SQLException {
		
		Connection conn = null;
		PreparedStatement pstmt = null; //Statement는 완성된 쿼리만 실행될 수 있음. 매개변수로 미완성 완성시키는 거면 PreparedStatement 선언 
		ResultSet rs = null;
		
		String sql = "insert into item(item_name, item_stock, item_price) values(?,?,?)";
		
		conn = DBconnect.connect();
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, item.getItem_name()); 
		pstmt.setInt(2, item.getItem_stock()); 
		pstmt.setInt(3, item.getItem_price()); 
		int r = pstmt.executeUpdate();
		
		if(r > 0) {
			System.out.println("상품등록성공");
		}
		
		DBconnect.close();
		return true; 
	}
	
	//7. 관리자모드 상품정보수정 
	public boolean updateItem(Item item) throws Exception {
		Connection conn = null;
		PreparedStatement pstmt = null; //Statement는 완성된 쿼리만 실행될 수 있음. 매개변수로 미완성 완성시키는 거면 PreparedStatement 선언 
		ResultSet rs = null;
		
		//값을 바꿔라 where id가 이거인 것에 대해서 
		String sql = "update item set item_name=?, item_stock=?, item_price=? where id=?";

		conn = DBconnect.connect();
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, item.getItem_name()); 
		pstmt.setInt(2, item.getItem_stock()); 
		pstmt.setInt(3, item.getItem_price()); 
		pstmt.setInt(4, item.getId());
		int r = pstmt.executeUpdate();

		if(r > 0) {
			System.out.println("상품수정성공");
		}
		
		DBconnect.close();
		
		return true; 
	}
	
	//수정?
	public boolean deleteItem(int id) throws Exception {
		Connection conn = null;
		PreparedStatement pstmt = null; //Statement는 완성된 쿼리만 실행될 수 있음. 매개변수로 미완성 완성시키는 거면 PreparedStatement 선언 
		ResultSet rs = null;
		
		//값을 바꿔라 where id가 이거인 것에 대해서 
		String sql = "delete from item where id=?";

		conn = DBconnect.connect();
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, id); 
		int r = pstmt.executeUpdate();
		
		if(r > 0) {
			System.out.println("상품삭제성공");
		}
		
		DBconnect.close();
		
		return true; 
	}	
}
```
  
#### ㄴ TestDAO.java 
```
package DB;
import java.util.ArrayList;
import java.util.Scanner;

public class TestDAO {

	/** CRUD 다 구현한 거야 기기 */
	
	// ItemDAO 테스트클래스 - 나중에 클래스파일이라 없어질 예정. 
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
		
		//2. 전체출력
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
		
		
		//3. 사용자가 입력한 상품의 단가조회 
		System.out.println();
		System.out.print("상품명 입력(단가조회) : ");
		
		Scanner sc = new Scanner(System.in); 
		String item_name = sc.next(); 
		
		String item_price = instance.getPrice(item_name); //위에서 빌려썻자나 인스턴스로 불러
		
		System.out.println("단가 : " + item_price);
		
		//4. 사용자가 입력한 상품의 갯수 
		System.out.println();
		System.out.print("상품명 입력(개수조회) : ");
		
		String item_stock = instance.getStock(item_name); //위에서 빌려썻자나 인스턴스로 불러
		
		System.out.println("개수 : " + item_stock);

		
		//5. 사용자가 구매 요청한 상품의 재고량 업데이트 
		System.out.println();
		System.out.print("상품명 입력(재고량 업데이트) : ");
		item_name = sc.next(); 
		
		item_stock = item_stock.substring(0,item_stock.length()-1); //한 칸 줄여서 "개" 빼기 
		
		System.out.print("구매 요청 수량: ");
		String count = sc.next(); 
		
		instance.updateStock(item_stock, count, item_name); //item_stock 대신 토탈 "100" 임의로 해도 됨. 
		
		//6. 상품등록테스트 - 관 (너네 이름 다 다르니 name stock으로 할게) 
		Item item = new Item(); 
		
		System.out.println();
		System.out.print("상품명 : ");
		String name = sc.next();
		
		System.out.print("입고량 : ");
		int stock = sc.nextInt();
		
		System.out.print("단가: ");
		int price = sc.nextInt(); 
		
		item.setItem_name(name); //이것들을 집어넣어주자 
		item.setItem_stock(stock);
		item.setItem_price(price); 
		
		boolean r = instance.insertItem(item); //만든 아이템 집어넣기 
		if(r) { //r이 true라면
			System.out.println("상품등록테스트완료");
		}
		
		//7. 수정 
		System.out.println();
		item = new Item(); 
		
		System.out.println();
		System.out.print("수정할 상품명 : ");
		 name = sc.next();
		
		System.out.print("수정할 입고량 : ");
		 stock = sc.nextInt();
		
		System.out.print("수정할 단가: ");
		 price = sc.nextInt(); 
		
		item.setId(4);
		item.setItem_name(name); //이것들을 집어넣어주자 
		item.setItem_stock(stock);
		item.setItem_price(price); 
		
		r = instance.insertItem(item); //만든 아이템 집어넣기 
		if(r) { //r이 true라면
			System.out.println("상품수정테스트완료");
		}
		
		//8. 삭제 (Item item) 말고 id로 
		System.out.println();
		System.out.print("삭제할 아이디 : ");
		int id = sc.nextInt();
		
		r = instance.deleteItem(id); 

		if(r) { //r이 true라면
			System.out.println("상품수정테스트완료");
		}
	}
}
```
  
### package UI 

#### ㄴ MainPOS.java 
```
package UI;

import javax.swing.JFrame;
import javax.swing.JTabbedPane;

public class MainPOS extends JFrame {

	public POS_pos pos = null; 
	public POS_StockManagrment sm = null; 
	
	public static void main(String[] args) {
	MainPOS main = new MainPOS(); 
	main.setTitle("POS 시스템"); 
	
	main.pos = new POS_pos();
	main.sm = new POS_StockManagrment(); 
	
	JTabbedPane jtp = new JTabbedPane(); 
	jtp.add("POS", main.pos);
	jtp.add("재고관리", main.sm); 
	main.add(jtp); 
	
	main.setSize(550, 400); 
	main.setVisible(true); 	
	}	
}
```
  
#### ㄴ POS_pos.java 
```
package UI;

import javax.swing.JPanel;

public class POS_pos extends JPanel {
	
}
```
  
#### ㄴ POS_StockManagrment.java 
```
package UI;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Vector;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;

import DB.Item;
import DB.ItemDAO;

public class POS_StockManagrment extends JPanel implements ActionListener {

	JLabel jl; 
	JButton refresh; 
	JButton register; //등록 
	JButton update; 
	JButton delete; 
	
	//이 두 개를 연결해서 데이터를 뿌릴 것 
	JTable jt;
	DefaultTableModel model;
	
	//
	
	public POS_StockManagrment() {
		setLayout(null); 
		
		jl = new JLabel("재고현황"); 
		jl.setSize(100,40); 
		jl.setLocation(60, 20); //이정도 떨어진 위치~ 가로60 세로20 떨궈 붙이기 
		//jl.setBounds(60,20,100,40); //위랑 비교해서 이래도 됨 
		
		refresh = new JButton("상품새로고침"); 
		refresh.setBounds(10,70,150,40); //내용물 40 + 위치 20 더하기 | 70 + 60 = 130
		
		register = new JButton("등록"); 
		register.setBounds(10,130,150,40);
		
		update = new JButton("수정"); 
		update.setBounds(10,190,150,40);
		
		delete = new JButton("삭제"); 
		delete.setBounds(10,250,150,40);
		
		
		String title[] = {"ID", "상품명", "재고량", "단가"}; 
		model = new DefaultTableModel(title, 0); //JTable은 공간도 붙이는데 이거 쓴거
		jt = new JTable(model); 
		JScrollPane sp = new JScrollPane(jt); //화면에 뿌려줄 건 이거 
		
		sp.setBounds(200,20,300,280);
		
		refresh.addActionListener(this);
		register.addActionListener(this);
		update.addActionListener(this);
		delete.addActionListener(this);
		
		add(jl);
		add(refresh);
		add(register); 
		add(update); 
		add(delete); 
		add(sp); 
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		Object obj = e.getSource();
		DefaultTableModel model = (DefaultTableModel) jt.getModel(); //DefaultTableModel객체형으로 형변환 
		
		
		if(obj == refresh) {
			System.out.println("전체데이터 조회 버튼 눌림");
			
			try {
				loadDB(model);
			} catch (Exception e1) {
				System.out.println("db전체조회오류");
			}
		} else if (obj == register) {
			System.out.println("상품 등록 버튼 눌림");
		} else if (obj == update) {
			System.out.println("상품 수정 버튼 눌림");
		} else if (obj == delete) {
			System.out.println("상품 삭제 버튼 눌림");
		}
	}
	
	public void loadDB(DefaultTableModel model) throws Exception {
		//인스턴스 객체 리턴받기 - getAllItems() 실행 - return 
		//ArrayList -> Item 
		
		ArrayList<Item> list = ItemDAO.getinstance().getAllItems();
		
		for(Item item: list) {
			String id = String.valueOf(item.getId()); 
			String item_name = item.getItem_name();
			String item_stock = String.valueOf(item.getItem_stock());
			String item_price = String.valueOf(item.getItem_price()); 
			
			Vector<String> in = new Vector<String>(); //필드별로 한줄씩 읽어다가 백터에 넣고 모델의 한행으로 차지하게 넣기 
			in.add(id);
			in.add(item_name);
			in.add(item_stock);
			in.add(item_price);
			
			model.addRow(in);
		}		
	}
}
```
  
