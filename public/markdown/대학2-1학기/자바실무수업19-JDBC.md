package j2025_05_26;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Task04 {

	public static void main(String[] args) {
		
		/** 1. DB연결 재료 선언 */
		Connection conn; //DB연결 권한 객체(클래스) *SQL문의 쿼리권한을 가질 것  
		
		String url = "jdbc:mysql://localhost:3306/haksa?severTimezone=UTC"; //DB주소 (언어마다 DB종류마다 형식 다 지정됨. 찾아서 해) https://처럼 
		//서버 지정 안하면 현재 컴 localhost 포트 지정 안하면 기본이 3306 약속 
		//haksa? DB에 들어가고 severTimezone=UTC로 시간옵션 설정
		String id = "root"; //스탠다드 계정. 계정 만들었으면 그걸로 
		String pwd = "1234"; 
		
		Statement stmt = null; //아래 java.sql.Statement;로 잘 선택! 빈즈X 
		ResultSet rs; //결과물에 대한 처리용 
		
		/** 처리 */
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			conn = DriverManager.getConnection(url, id, pwd); //어나니머스. 익명의 계정일 떄. 이 링크 이 아이디 이 비번으로 액세스해. 커넥션객체로 넘기기 key  
			
			System.out.println("DB 연결 성공");
			
			/** 2. 권한 넘기기 stmt로 쿼리를 실행 executeQuery 셀렉트 쿼리실행 rs로 테이블 받기(포인트변수처럼 행 하나씩 가르킴.)
			 * 또한 update 추가 crud의 u 
			 *  */
			String sql = "select * from student"; 
			String sql4 = "delete from student where id='2025020'";  
			
			stmt = conn.createStatement();
			stmt.executeUpdate(sql4); 
			
			rs = stmt.executeQuery(sql); //반환값을 요규하는 건 select뿐 요청 후 번환!executeQuery 쿼리는 질문하다 나머진 업데이트하면 됨 
			
			while(rs.next()) { //next 로 테이블 받은 rs를 행 계속 받아  
				String name = rs.getString("name"); // "" 부분 필드명 그대로 (대소문자도) 
				String ids = rs.getString("id"); 
				
				System.out.println("성명 : " +  name + ", 아이디 : " + ids);
			}
			
			rs.close();
			stmt.close();
			conn.close();
			
		} catch (ClassNotFoundException e) {
			System.out.println("JDBC 드라이버 오류 : jar 파일이 있는지 확인해보시오.");
		} catch (SQLException e) {
			System.out.println("DB 연결 오류"); //얘 DriverManager.getConnection가 쿼리 conn로 날릴 건데 안되면 디비 연결안됨. 
		}
	}
}

/** 
DB 연결 성공
성명 : smjeon, 아이디 : 2024003
성명 : kslee, 아이디 : 2024004
성명 : gdhong, 아이디 : 2025010
성명 : gdh, 아이디 : 2025011
*/
