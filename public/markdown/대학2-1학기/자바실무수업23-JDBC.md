DBConnect.java, Item.java, MainPOS.java, Pos_pos.java 는 저번꺼 보면 됨.  
  
### ItemDAO.java
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
  
### POS_StockManagrment.java 
```
package UI;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Vector;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
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
	
	Item item = null;
	
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
			
			String menu = register.getText(); //레지스터(버튼)의 텍스트를 가져와 
			StockWindow sw = new StockWindow(menu, item); //넘기기 
		} else if (obj == update) {
			System.out.println("상품 수정 버튼 눌림");
			String menu = update.getText();	

			int row = -1;
			row = jt.getSelectedRow(); 
			if(row == -1) {
				JOptionPane.showConfirmDialog(null, "셀을 선택하세요", "경고", JOptionPane.WARNING_MESSAGE);
			} else {
				String id = (String) jt.getValueAt(row, 0);
				String name = (String) jt.getValueAt(row, 1);
				String stock = (String) jt.getValueAt(row, 2);
				String price = (String) jt.getValueAt(row, 3);
				
				System.out.println(id + ", " + name + ", " + stock + ", "+ price);
			
				item = new Item();
				item.setId(Integer.parseInt(id));
				item.setItem_name(name);
				item.setItem_stock(Integer.parseInt(stock));
				item.setItem_price(Integer.parseInt(price)); 
				
				StockWindow sw = new StockWindow(menu, item);
			}
		}	
			
		 if (obj == delete) {
			System.out.println("상품 삭제 버튼 눌림");
			String menu = delete.getText();
			StockWindow sw = new StockWindow(menu, item);
		}
	}
	
	public void loadDB(DefaultTableModel model) throws Exception {
		//인스턴스 객체 리턴받기 - getAllItems() 실행 - return 
		//ArrayList -> Item 
		
		ArrayList<Item> list = ItemDAO.getinstance().getAllItems();
		
		int rows = model.getRowCount(); //모델에 몇개 있나? 다 비워야하잖아.
		
		for(int i = rows-1; i >= 0; i--) {
			model.removeRow(i); //새로고침 원래꺼삭제
		}
		
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
  
### StockWindow.java 
```
package UI;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.SQLException;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;

import DB.Item;
import DB.ItemDAO;

public class StockWindow extends JFrame implements ActionListener {

	JLabel id, name, stock, price;
	JTextField txt_id, txt_name, txt_stock, txt_price;
	JButton btn; 
	JPanel jp; 
	
	public StockWindow(String menu, Item item) {
		Container ct = getContentPane();
		ct.setLayout(new BorderLayout());
		
		id = new JLabel("ID"); 
		name = new JLabel("상품명"); 
		stock = new JLabel("재고량"); 
		price = new JLabel("단가"); 
		
		txt_id = new JTextField(10);
		txt_id.setEditable(false);
		txt_name = new JTextField(10); 
		txt_stock = new JTextField(10); 
		txt_price = new JTextField(10); 
		
		if(item != null) {
			txt_id.setText(String.valueOf(item.getId())); //string으로변환
			txt_name.setText(item.getItem_name());
			txt_stock.setText(String.valueOf(item.getItem_stock()));
			txt_price.setText(String.valueOf(item.getItem_price()));
		}
		
		btn = new JButton(menu); 
		
		btn.addActionListener(this);
		
		//저거 컨테이너에 붙이자 
		jp = new JPanel(new GridLayout(4,2));
		
		jp.add(id);
		jp.add(txt_id);
		
		jp.add(name);
		jp.add(txt_name);
		
		jp.add(stock);
		jp.add(txt_stock);
		
		jp.add(price);
		jp.add(txt_price);
		
		ct.add(jp, BorderLayout.CENTER); 
		ct.add(btn, BorderLayout.SOUTH);
		
		setTitle("재고관리");
		setSize(300,300); 
		setVisible(true); 
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		Item item = new Item();
		String id = txt_id.getText();
		String item_name = txt_name.getText(); 
		String item_stock = txt_stock.getText(); 
		String item_price = txt_price.getText();
		
		if(e.getActionCommand().equals("등록")) { //등록버튼이면 
			item.setItem_name(item_name);
			item.setItem_stock(Integer.parseInt(item_stock));
			item.setItem_price(Integer.parseInt(item_price));
			
			ItemDAO dao = ItemDAO.getinstance();
			try {
				boolean b = dao.insertItem(item); //id
				
				if(b) {
					JOptionPane.showMessageDialog(null, "상품등록완료", "성공", JOptionPane.INFORMATION_MESSAGE);
					dispose(); //현재 창 닫아주는 메소드 
				}
			} catch (Exception e1) {
				
			}
		} else if(e.getActionCommand().equals("수정")) {
			item.setId(Integer.parseInt(id)); 
			item.setItem_name(item_name);
			item.setItem_stock(Integer.parseInt(item_stock));
			item.setItem_price(Integer.parseInt(item_price));
			
			ItemDAO dao = ItemDAO.getinstance();
			
			try {
				boolean b = dao.updateItem(item);
				
				if(b) {
					JOptionPane.showMessageDialog(null, "상품수정완료", "성공", JOptionPane.INFORMATION_MESSAGE);
					dispose(); //현재 창 닫아주는 메소드 
				}
			} catch (Exception e1) {
				
			}
		} else if(e.getActionCommand().equals("삭제")) {
			//삭제할 때 아이디 제대로 안받아옴 
			int item_id = Integer.parseInt(txt_id.getText());

			ItemDAO dao = ItemDAO.getinstance();
			try {
				boolean b = dao.deleteItem(item_id); //id
				
				if(b) {
					JOptionPane.showMessageDialog(null, "상품삭제완료", "성공", JOptionPane.INFORMATION_MESSAGE);
					dispose(); //현재 창 닫아주는 메소드 
				}
			} catch (Exception e1) {
				
			}
		}
	}	
}
```
  
