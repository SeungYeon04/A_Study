### 오늘의 자바 2025-05-14  
명문대 애들은 똑똑해서 안 할 이유를 100가지 가져옴  
전문대는 겸손해. 연구소에서 더 잘 한다.  
자신을 폄하하지 않기를 바랍니다.  
전문대가 할 수 있는 일 따로 있고,  
4년제가 할 일 따로 있다.  
  
SE가 수준차가 따로 있다. SE중에서도 높은 낮은  
그리고 우리는 에어컨 있는데서 일해도  
기계과는 현장인데, 우리 현장은 SE에요.  
그래서 공부 못한 애들이 SE로 많이 가는 거에요.  
물론 SE가 나쁜 게 아니라 맞는 게 있는데  
SW로 가려면 더 노력해야 한다.  
마무리를 잘 합시다.  
  
오늘 지나고 DB써서 리스트에 넣어  
디비에 넣고 빼고 UI화면 만들어서  
UI연동하고 관리프로그램 제시할 것이다.  
  
어레이리스트(연속) 링크드리스트(불연속 저장)  
배열이랑 비슷하잖아요. 인덱스 있고  
1000개 데이터를 끼워넣고 했을 땐 속도차이 나고 했죠  
  
*** 
  
클래스다이어그램에서  
삼각형 화살표로 상속을 표시했는데  
삼각형 모양이 부모, 꼬리가 자식?인가  
일단 얘는 -> 모양임. 관계를 표시함.  
  
[] lottoId: int 에서 []부분이 빨가면 private 파란색은 public  
멤버변수는 보통 막아둔다.  
  
#### 교수님의 장난 
XX이 맨날 멍하니 있더니 요즘은 옆에 친구 때리며 키우네 감동이네  
애 너무 팬다. 나도 너 잘때 안깨웠어 입에 파리 들어갈 거 같았는데 이러심 ㅋㅋ  
  
너네 지속시간 1학년 3분 2학년 5분 게임은? 24시간  
대학도 게임처럼 하면 좋은데 난 꼰대  
언제 커리큘럼 게임처럼 바뀔지 몰라~ 그럼 바뀌면 그때 대학 다시 가던가 하심  
  
### 1. 로또번호 10번 출력 후 5번 제거 (교수님 코드)
```
package j2025_05_14;

import java.util.ArrayList;
import java.util.Random;

class Lotto {
	private int lottoId; 
	private String lottoNum; 

	//get 멤버변수값 꺼내는 거 
	//set 멤버변수 원래 못바꾸니까 수정하는 거
	
	public Lotto(int id, String num) { //이름이 멤변이랑 다르니 this안 써도 됨 
		lottoId = id; //매개변수를 멤버변수에다가 저장 
		lottoNum = num; 
	}

	public int getLottoId() {
		return lottoId;
	}

	public void setLottoId(int lottoId) {
		this.lottoId = lottoId;
	}

	public String getLottoNum() {
		return lottoNum;
	}

	public void setLottoNum(String lottoNum) {
		this.lottoNum = lottoNum;
	}

	//이것도 소스에서 인헤레트 뭐시기 안 toString 선택하여 함 
	@Override
	public String toString() {
		return "제 " + (lottoId+1) + "회차 로또 번호 : " + lottoNum + "입니다."; //+결합연산자
	}
}

class LottoArrayList { //상속X 관계O (->모양)
	//메소드 추측: add추가, remove삭제, show화면출력All전부 하다보나 알아서 알아보자. 
	//클래스(첫번째 글자 무조건 대문자), 메소드(첫번째 지난 단어는 대문자로 시작한다.) 작명 잘 해야한다. 
	
	// 객체리스트? 
	ArrayList<Lotto> list;
	
	public LottoArrayList() {
		list = new ArrayList<Lotto>(); 
	}
	
	public void addLottoNumber(Lotto l) {
		list.add(l); 
	}
	
	public boolean removeLottoNumber(int i) { //위치정보 i 
		Lotto temp = list.remove(i); //삭제하고 로또객체를 받아야 함. 지워진 놈을 여따 저장. 
		
		if(temp != null) { //하나 지운 값이 저장이 잘 됐으면. null이 아니면 
			return true; 
		} else {
			return false; 
		}
	}
	
	public void showAllLottoNumber() {
		for(int i = 0; i < list.size(); i++) { //pop하면 사이즈 변경되지만 이건 해도 됨 딱 10 -> 9개로
			Lotto l = list.get(i); 
			//get은 순서를 갖고있음 get이 로또객체갖고있으니 (Lotto l은 담을 임시객체)
			System.out.println(l.toString()); //get(i) 인덱스를 받은, 임시객체.투스트링 불러옴 
		}
	}
}

public class Task01 {

	public static void main(String[] args) {
		//지금(오늘)은 set map 몰라도 괜찮은데 리스트 이번에 완전 이해하고 복습. 
		//시간 나는대로 set map 넘어가자. 
		
		Random r = new Random(); 
		Lotto[] lottoData = new Lotto[100]; //*** 객체배열명 *** 구조 잘 보자. 
		String number = null; 
		int tempNo = 0; 
		LottoArrayList lottoList = new LottoArrayList(); //로또어레이리스트객체생성 
		
		// 1. 
		for(int i = 0; i < 10; i++) {
			number = "";
			
			for(int j = 0; j < 6; j++) {
				// 2. 
				tempNo = r.nextInt(45)+1; 
				
				if(number == "") { //처음. 빈 문자열이라면, 
					number = number + tempNo;
				} else {
					number = number + ", " + tempNo;
				}
			}
			// 3. lottoData i위치에 Lotto객체생성. 클래스니 i값 number문자열 전달 
			lottoData[i] = new Lotto(i ,number); //lottoData에 i값 머하고 로또객체생성 
			
			// 4. i번째 위치의 LottoData를 LottoList에 추가하라 
			lottoList.addLottoNumber(lottoData[i]);
		}
		// 5-1. 그냥 출력
		lottoList.showAllLottoNumber(); 
		System.out.println("*** 5번째 데이터 삭제 후 ***");
		
		// 5-2. 5번 삭제 후 출력 
		lottoList.removeLottoNumber(4); //0번지 기준으로 5번째꺼 삭제
		lottoList.showAllLottoNumber();
	}
}
```
  
제 1회차 로또 번호 : 34, 23, 8, 2, 34, 22입니다.  
제 2회차 로또 번호 : 14, 19, 27, 40, 14, 4입니다.  
제 3회차 로또 번호 : 40, 11, 42, 42, 32, 37입니다.  
제 4회차 로또 번호 : 14, 24, 33, 18, 42, 35입니다.  
제 5회차 로또 번호 : 18, 1, 4, 13, 27, 22입니다.  
제 6회차 로또 번호 : 24, 29, 37, 43, 25, 14입니다.  
제 7회차 로또 번호 : 23, 38, 16, 37, 41, 31입니다.  
제 8회차 로또 번호 : 30, 38, 41, 36, 2, 26입니다.  
제 9회차 로또 번호 : 6, 11, 14, 18, 27, 37입니다.  
제 10회차 로또 번호 : 10, 35, 12, 33, 42, 2입니다.  
*** 5번째 데이터 삭제 후 ***  
제 1회차 로또 번호 : 34, 23, 8, 2, 34, 22입니다.  
제 2회차 로또 번호 : 14, 19, 27, 40, 14, 4입니다.  
제 3회차 로또 번호 : 40, 11, 42, 42, 32, 37입니다.  
제 4회차 로또 번호 : 14, 24, 33, 18, 42, 35입니다.  
제 6회차 로또 번호 : 24, 29, 37, 43, 25, 14입니다.  
제 7회차 로또 번호 : 23, 38, 16, 37, 41, 31입니다.  
제 8회차 로또 번호 : 30, 38, 41, 36, 2, 26입니다.  
제 9회차 로또 번호 : 6, 11, 14, 18, 27, 37입니다.  
제 10회차 로또 번호 : 10, 35, 12, 33, 42, 2입니다.  
  
*** 
  
### 중복이 없는 Set 

map은 나중에 오늘은 시간상 set만.  
  
SET: 배열하고 동일하게 순서가 있음.  
배열은 0번지 3번지에 같은 데이터 3이 있는 거 가능  
같은 데이터 가능해? = OK  
  
때로는 같은 데이터가 아예 못 들어가게 막아야 할 때 있잖아.  
컨티뉴 등 썼잖아.  
  
Set 순서가 없음. 반복문 못씀. 포인터변수를 순회하여 씀.  
iterator 이런 거  
중복을 막도록 코드가 되어있음. 우리는 중복 거를 필요 없음.  
  
얘는 get을 못씀. set.iterator(); 포인터변수. 첫번째 가리킴.  
while(is.hasNext()) {
	Object o = it.next(); 
}
  
### 2. 중복불가 HashSet 리스트와 코드비교 
```
package j2025_05_14;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;

public class Task02 {

	public static void main(String[] args) {
		/** HashSet: 중복 불가 */ 
		HashSet<Integer> odd = new HashSet<Integer>(); //홀수, 형변환 지정 안해도 되게 제너릭 
		HashSet<Integer> even = new HashSet<Integer>(); //짝수 
		
		for(int i = 1; i <= 5; i=i+2) {
			odd.add(i); //1,3,5
			even.add(i+1); //2,4,6
		}
		
		System.out.println("odd set : " + odd);
		System.out.println("even set : " + even);
		
		odd.add(5); 
		System.out.println("odd set (5추가) : " + odd);
		
		odd.add(7); 
		System.out.println("odd set (7추가) : " + odd);
		
		/** ArrayList: 중복 가능 */
		ArrayList<Integer> test = new ArrayList<Integer>(); 
		
		for(int i = 1; i <= 5; i=i+2) {
			test.add(i); //1,3,5
		}
		System.out.println("test list : " + test); 
		
		
		test.add(5); 
		test.add(1,5); 
		//List: 같은 데이터가 있어도 맨 마지막에 잘 추가됨. 
		System.out.println("test list (5추가) : " + test); 
	
		System.out.println();
		System.out.println();
		
		// 리스트 요소를 이용해서 합계 구하기 
		int sum1 = 0; 
		for(int i = 0; i < test.size(); i++) {
			sum1 = sum1 + test.get(i);	
		}
		
		System.out.println("list 합계 : " + sum1);
		
		// Set을 이용하여 합계 구하기 
		int sum2 = 0; 
		Iterator<Integer> it = odd.iterator(); //Iterator<제너릭한>인터페이스의 객체변수 사용 .iterator()메소드 
		
		while(it.hasNext()) { //값이 계속 존재한다면 
			sum2 = sum2 + it.next(); //next() 인티저객체로 하나씩 갖고옴 
		}
		
		System.out.println("odd set : " + sum2);
	}
}
```
odd set : [1, 3, 5]  
even set : [2, 4, 6]  
odd set (5추가) : [1, 3, 5]  
odd set (7추가) : [1, 3, 5, 7]  
test list : [1, 3, 5]  
test list (5추가) : [1, 5, 3, 5, 5]  
  
  
list 합계 : 19  
odd set : 16  

