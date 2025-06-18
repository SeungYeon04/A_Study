전에서 변경된 클래스만 올리겠습니다.  
  
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
	
	//gpt 
	public int getPriceByItemName(String item_name) throws SQLException {
	    Connection conn = null;
	    PreparedStatement pstmt = null;
	    ResultSet rs = null;
	    int item_price = 0;

	    String sql = "select item_price from item where item_name=?";

	    conn = DBconnect.connect();
	    pstmt = conn.prepareStatement(sql);
	    pstmt.setString(1, item_name);
	    rs = pstmt.executeQuery();

	    while(rs.next()) {
	        item_price = rs.getInt("item_price");
	    }

	    DBconnect.close();
	    return item_price;
	}

	public int getStockByName(String item_name) throws SQLException {
	    Connection conn = null;
	    PreparedStatement pstmt = null;
	    ResultSet rs = null;
	    int item_stock = 0;

	    String sql = "select item_stock from item where item_name=?";

	    conn = DBconnect.connect();
	    pstmt = conn.prepareStatement(sql);
	    pstmt.setString(1, item_name);
	    rs = pstmt.executeQuery();

	    while(rs.next()) {
	        item_stock = rs.getInt("item_stock");
	    }

	    DBconnect.close();
	    return item_stock;
	}

	public void updateStock(String item_name, int new_stock) throws SQLException {
	    Connection conn = null;
	    PreparedStatement pstmt = null;

	    String sql = "update item set item_stock=? where item_name=?";

	    conn = DBconnect.connect();
	    pstmt = conn.prepareStatement(sql);
	    pstmt.setInt(1, new_stock);
	    pstmt.setString(2, item_name);
	    int r = pstmt.executeUpdate();

	    if (r > 0) {
	        System.out.println("재고량 업데이트 성공");
	    }
	    DBconnect.close();
	}	
}
```
  
### POS_pos.java 
```
package UI;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Vector;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import DB.Item;
import DB.ItemDAO;

public class POS_pos extends JPanel implements ActionListener {

    JButton load, add, pay, cancel;
    JLabel name, count, total;
    JComboBox<String> jcb;
    JTextField jtf_count, jtf_total;
    JTable jt;

    public POS_pos() {

        setLayout(null);

        load = new JButton("제품 불러오기");
        load.setBounds(20, 20, 140, 40);

        name = new JLabel("상품");
        name.setBounds(20, 90, 100, 30);

        jcb = new JComboBox<>();
        jcb.setBounds(70, 90, 200, 30);

        count = new JLabel("수량");
        count.setBounds(20, 140, 100, 30);

        jtf_count = new JTextField();
        jtf_count.setBounds(70, 140, 200, 30);

        total = new JLabel("총가격");
        total.setBounds(20, 250, 100, 40);

        jtf_total = new JTextField();
        jtf_total.setBounds(70, 250, 200, 40);
        jtf_total.setEditable(false);

        add = new JButton("추가");
        add.setBounds(170, 190, 100, 40);

        DefaultTableModel model = new DefaultTableModel(0,0);
        jt = new JTable(model);
        JScrollPane jsp = new JScrollPane(jt);
        jsp.setBounds(300, 20, 210, 210);

        pay = new JButton("결제");
        pay.setBounds(300, 250, 100, 40);

        cancel = new JButton("취소");
        cancel.setBounds(410, 250, 100, 40);

        // 컴포넌트 추가
        add(load);
        add(name);
        add(jcb);
        add(count);
        add(jtf_count);
        add(total);
        add(jtf_total);
        add(add);
        add(jsp);
        add(pay);
        add(cancel);

        // 리스너 연결
        load.addActionListener(this);
        add.addActionListener(this);
        pay.addActionListener(this);
        cancel.addActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // 선택 버튼의 텍스트 저장(menu)
        String menu = ((JButton) e.getSource()).getText();
        // 사용자가 입력한 수량 저장(stock)
        String stockStr = jtf_count.getText(); // 예: 수량 입력 필드
        // 사용자가 선택한 상품명 저장(itemName)
        String itemName = (String) jcb.getSelectedItem();
        int price = 0;
        int sum = 0;
        // total은 필드로 선언돼 있어야 함
        // ex: int total = 0;

        if (menu.equals("제품 불러오기")) {
        	jcb.removeAllItems();
            ArrayList<String> itemlist = new ArrayList<>();
            try {
                // 상품명 리스트 가져오기
                try {
					itemlist = ItemDAO.getinstance().getAllItemNames();
				} catch (Exception e1) {
				}
                // 상품명 리스트 순회자 객체 생성
                for (String item : itemlist) {
                	jcb.addItem(item);
                }
            } catch (Exception e1) {
                e1.printStackTrace();
            }

        } else if (menu.equals("추가")) {
            try {
                // 사용자가 입력한 수량을 stock 변수에 저장
                int stock = Integer.parseInt(stockStr);

                // 사용자가 선택한 상품명의 가격을 검색해서 price 변수에 저장
                price = ItemDAO.getinstance().getPriceByItemName(itemName);

                // stock * price를 sum 변수에 저장
                sum = stock * price;

                // sum 변수를 누적해서 총 금액을 total 변수에 저장
                int value = 0;  // 총합 저장용 변수
                value += sum;


                // total 변수 값을 "총가격" 텍스트필드에 출력
                jtf_total.setText(String.valueOf(value));

                // Vector<String> 객체 생성
                Vector<String> in = new Vector<>();
                // Vector<String> 객체에 상품명, 재고량, 가격, 총액 추가
                in.add(itemName);
                in.add(String.valueOf(stock));
                in.add(String.valueOf(price));
                in.add(String.valueOf(sum));

                // JTable 객체에 연결한 모델에 Vector<String> 객체(in) 추가
                DefaultTableModel model = (DefaultTableModel) jt.getModel();
                model.addRow(in);  // 여기서 in은 Vector 또는 Object[]

            } catch (NumberFormatException | SQLException e1) {
                e1.printStackTrace();
            }

        } else if (menu.equals("결제")) {
            int result = JOptionPane.showConfirmDialog(null, "결제하시겠습니까?");
            if (result == JOptionPane.YES_OPTION) {
                int input = Integer.parseInt(JOptionPane.showInputDialog("총 금액은 " + jtf_total.getText() + "입니다\n지불하실 금액을 입력하여주세요."));
                if (input >= Integer.parseInt(jtf_total.getText())) {
                    JOptionPane.showMessageDialog(null, "지불하신 금액은 " + input + "이고 \n상품의 합계는 " + jtf_total.getText() + "이며, \n거스름돈은 " + (input - Integer.parseInt(jtf_total.getText())) + "입니다");
                    // 재고량 업데이트 메소드 호출
                    stockUpdate(jt);
                    // 컴포넌트 데이터 초기화 메소드 호출
                    clean();
                } else {
                    JOptionPane.showMessageDialog(null, "금액이 부족합니다.\n결재를 취소합니다");
                }
            }

        } else if (menu.equals("취소")) {
            int confirm = JOptionPane.showConfirmDialog(null, "주문을 취소하시겠습니까?");
            if (confirm == JOptionPane.YES_OPTION) {
                clean();
            }
        }
    }

    public void clean() {
        // JTable 모델의 전체 행 수 반환
        int rowCount = jt.getRowCount();
        // JTable 데이터 삭제(반복문)
        for (int i = rowCount - 1; i >= 0; i--) {
        	jt.remove(i);
        }
        // 총가격 텍스트필드 초기화
        jtf_total.setText("");
        // 수량 텍스트필드 초기화
        jtf_count.setText("");
    }

    public void stockUpdate(JTable jt2) {
        for (int i = 0; i < jt2.getRowCount(); i++) {
            String name = (String) jt2.getValueAt(i, 0);
            String stockStr = (String) jt2.getValueAt(i, 1);
            int stock = Integer.parseInt(stockStr);
            String priceStr = (String) jt2.getValueAt(i, 2);
            int price = Integer.parseInt(priceStr);

            try {
                // 상품명(name)의 재고량 검색해서 total에 저장
                int totalStock = ItemDAO.getinstance().getStockByName(name);

                // totalStock, stock, name을 활용하여 DB의 재고량 수정
                int newStock = totalStock - stock;  // 결재 후 남은 재고 계산
                ItemDAO.getinstance().updateStock(name, newStock);

            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```
