### 위에는 간단 설명들 (아래가 핵심 + 과제) 

오늘까지 자료구조 끝나고요  
DB를 이용한 관리 프로그램 만들 거야.  
  
개발자로 갈 친구들 줄기차게 과제 줄 거고  
나도 포함  
호명하고 있는 애들은 개발자 될 거라고  
계속 보여줬던 애들이거든요  
  
알고 있는 기업도 모니터링 중  
3대 대기업도 외국인 취업 뜨니 모니터링하는 중  
  
지난 시간에 Set과 리스트 비교  
Set: 중복 없다.  
Hash Set: 
Tree Set: 기본적으로 이진트리를 이용하니 정렬되는 구조?  
일단 **Set 자료구조 자체가 중복 불가**  
  
일단 기말은 관리프로그램~  
  
Set, Map 한다.  
  
*** 
  
#### 리스트(선형자료구조-배열처럼 인덱스)  
순서있음 데이터중복가능  
인터페이스: Collection 과 List 사용  
관련클래스: ArraList, LikedList, Stack  
  
#### 셋(비선형 자료구조) 
순서없음 데이터중복불가  
위치정보없음 Iterator<Integer> it = c.iterator();  
이렇게 포인터 써야됨  
인터페이스: Collection 과 Set 사용  
관련클래스: HashSet, TreeSet, LinkedHashSet  
  
#### 맵(키와 값 구성) 
키와 값 구성 키는중복불가 값은중복가능  
인터페이스: Map  
관련클래스: HashMap, TreeMap  
  
*** 
  
### 기말고사 DB관리프로그램 -> 설명 
마이에스큐엘 시스템 설치해서 디비만들고 테이블만들고 
프로그램운영하고 
갖고오고 수정하고 그걸 크루드라 함 
우리는 피씨기반 자바 
웹서버 기반은 JSP 기반 
GUI 데이터 버튼 클릭입력 
디비 자료구조 IOT연동 오픈데이터 연동 들어가면은 좋고 
그렇다고 안드로이드 스튜디오를 쓰는 건 
앱 수업에 가깝다 

### 기말고사 DB관리프로그램 -> 배포계획 
-> 어디에 올릴 수 있어?  
| 플랫폼                       | 설명                                   |
| ------------------------- | ------------------------------------ |
| ✅ Windows                 | `.exe` 또는 `.msi`로 패키징해서 **배포/판매 가능** |
| ✅ macOS                   | `.dmg`, `.pkg`로 포장해서 스토어 외 판매 가능     |
| ✅ Linux                   | `.AppImage`, `.deb` 같은 패키지로 배포 가능    |
| ✅ itch.io, Steam, Gumroad | 데스크탑 JavaFX 앱 배포/판매 가능!              |
  
-> 현실적인 판매 방법  
| 방법             | 설명                                    |
| -------------- | ------------------------------------- |
| 🎯 **itch.io** | 독립 앱 판매에 가장 쉬움 (zip 또는 exe로 등록)       |
| 🎮 Steam       | 유료 판매 가능, 다만 Greenlight-like 승인 절차 필요 |
| 💸 Gumroad     | zip 또는 exe 파일 업로드 후 결제 붙이기 가능         |
| 🖥 자사 웹사이트 배포  | 설치파일 만들어서 판매하면 됨                      |
  
진짜 앱스토어(Android/iOS) 올리고 싶으면?  
▶ JavaFX 말고 Flutter, Unity, React Native, Kotlin, Swift, Android Studio 같은 툴을 써야 해.  
  
킹치만.. 자바수업이기에  

| 질문                           | 답변                                   |
| ---------------------------- | ------------------------------------ |
| JavaFX로 Google Play 올릴 수 있어? | ❌ 거의 불가능                             |
| iOS 앱스토어에 JavaFX 올릴 수 있어?    | ❌ 안 됨                                |
| PC용 JavaFX 앱은 판매 가능해?        | ✅ 가능 (exe, dmg, zip 배포 후 판매 가능)      |
| 어디에 팔 수 있어?                  | ✅ itch.io, Steam, Gumroad, 자사 홈페이지 등 |
  
JavaFX로 가서 피씨에 배포해봅시다.  
    
*** 
  
### HashSet, TreeSet, LinkedHashSet 소개 
```
package j2025_05_19;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.TreeSet;

public class Task01 {

	public static void main(String[] args) {
		//*Set 이라는 자료구조 자체가 중복 불가 
		//사용방법 자체는 ArrayList 랑 같음. 
		HashSet<Integer> hs = new HashSet<Integer>(); 
		//이렇게 넣어도 알아서 정렬된 것처럼 나옴. 제대로 정렬은 아니고 
		//한 바이트씩 떼서 해시알고리즘에 의해 저장 된다만 기억해주면 된다. 
		//Tree : 이진트리 써서 저장. 정렬할 수밖에 없는 구조.
		
		hs.add(1); 
		hs.add(5);
		hs.add(17);
		hs.add(3);
		hs.add(7); 
		
		System.out.println("HashSet : " + hs);
		
		TreeSet<Integer> ts = new TreeSet<Integer>(); 
		
		ts.add(1); 
		ts.add(5);
		ts.add(17);
		ts.add(3);
		ts.add(7); 
		
		System.out.println("TreeSet : " + ts);
		
		//LikedHashSet : 내가 저장한 순서대로 
		
		LinkedHashSet<Integer> ls = new LinkedHashSet<Integer>(); 
		
		ls.add(1); 
		ls.add(5);
		ls.add(17);
		ls.add(3);
		ls.add(7); 
		
		System.out.println("LinkedHashSet : " + ls);
	}
}
```
HashSet : [1, 17, 3, 5, 7]  
TreeSet : [1, 3, 5, 7, 17]  
LinkedHashSet : [1, 5, 17, 3, 7]  
  
### LinkedHashSet 으로 Iterator순환자에 합계와 max min 메소드로 값 구하기 
```
package j2025_05_19;

import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashSet;

public class Task02 {

	public static void main(String[] args) {
		//Set 은 인덱스가 없다 했어 
		LinkedHashSet<Integer> ls = new LinkedHashSet<Integer>(); 
		
		ls.add(1); 
		ls.add(5);
		ls.add(17);
		ls.add(3);
		ls.add(7); 
		
		System.out.println("LinkedHashSet : " + ls);
	
		//static 클래스를 불러와서 메소드 사용 
		System.out.println("최대값: " + Collections.max(ls));
		System.out.println("최소값: " + Collections.min(ls));

		//List 는 for(int i = 0;..로 hs.get(i) 했잖아. 얜 인덱스 없어서 get 안됨. 
		//인덱스 없으니, 순회자 set이름.iterator() 얘의 첫번째 권한을 넘겨준다 
		//Iterator 객체를 만들어서 그 다음 데이터 순회해서 참조하게 하기 
		Iterator<Integer> it = ls.iterator();
		
		int sum = 0;
		while(it.hasNext()) { //데이터가 존재하는 동안 반복
			//System.out.println("값:" + it.next());
			sum = sum + it.next(); 	
		}
		System.out.println("합계 : " + sum);
	}
}
```
LinkedHashSet : [1, 5, 17, 3, 7]  
최대값: 17  
최소값: 1  
합계 : 33  
  
### HashMap 으로 key value 다루기 - 추가, 변경, 삭제 
```
package j2025_05_19;

import java.util.HashMap;

public class Task03 {

	public static void main(String[] args) {
		//Map은 키(key)와 값(value)을 하나의 요소로 묶어 표현 
		//Tree자 붙은 건 모든 데이터 노드 원소가 기본으로 자동정렬이 됨. 
		//Map 기본이 HashMap이니 이것부터 한다. 
		//Set과 다르게 key값은 그대로 value만 바꿀 수 있다. 
		
		//Map은 키와 벨류가 들어가기에 다 제너릭 해야 함. 
		HashMap<String, String> hm = new HashMap<String, String>(); 
		
		//Map의 put = List의 add 대신인가? 
		hm.put("이름", "홍길동"); 
		hm.put("나이", "21세"); 
		hm.put("주소", "전라도"); 
		
		System.out.println("Map data : " +hm);
		
		hm.put("나이", "24세"); //이미 같은 키가 있는 경우 
		
		//오브젝트 방식도 된다. 
		//Object x = hm.put("나이", "24세");
		//System.out.println(x);
		
		//System.out.println("Map data : " +hm);
	
		Object x = hm.put("성별", "남자");
		
		// hm.put => 추가한다는 것. 
		if(x != null) {
			System.out.println("대체된 값: " + x);
		} else {
			System.out.println("새롭게 맵에 추가됨.");
			System.out.println("map data : " + hm);
		}
		
		//hm.remove("나이");면 삭제되는데 y에 받아본 거
		Object y = hm.remove("나이"); 
		
		if(y != null) {
			System.out.println("나이 키 삭제 : " + y);
		} else {
			System.out.println("키가 맵에 존재하지 않는다.");
		}
		
		System.out.println("map data : " + hm);
	}
}
```
Map data : {이름=홍길동, 주소=전라도, 나이=21세}  
새롭게 맵에 추가됨.  
map data : {이름=홍길동, 주소=전라도, 나이=24세, 성별=남자}  
나이 키 삭제 : 24세  
map data : {이름=홍길동, 주소=전라도, 성별=남자}  
  
### LinkedHashMap로 성적 총점 평균 구하기 
```
package j2025_05_19;

import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

public class Task04 {

	public static void main(String[] args) {
		//LikedHashMap이라면 순서대로겠지? 
		LinkedHashMap<String, Integer> lm = new LinkedHashMap<String, Integer>(); 
		
		lm.put("국어", 98);
		lm.put("영어", 100);
		lm.put("수학", 86);
		lm.put("사회", 99);
		lm.put("과학", 89);

		System.out.println("성적 : " + lm + total_avg(lm)); //메소드로 하여 역할 전달
	}

	private static String total_avg(Map m) { //제일 상위객체인 Map으로 해도 됨. HashMap도 되고 
		//총점, 평균 구하기 
		int sum = 0; //총점 
		
		int totalCount = m.size(); //노드의 갯수 5개 넣기 : m.size()
		Collection<Integer> c = m.values(); //모든 노드의 값만 리스트처럼 만들어줌. 콜렉션 클래스의 제너릭타입 인티저로 받은 것. 
		Iterator<Integer> it = c.iterator(); //인덱스 없이 순회하려면? 순회자로 받자 
		
		while(it.hasNext()) { //순회자 있을 동안 
			sum = sum + it.next(); 
		}
		
		return "\n총점 : " + sum + " 평균 : " + ((double)sum/totalCount); //lm + total_avg(lm)로 뿌려줄 것 
	}
}
```
성적 : {국어=98, 영어=100, 수학=86, 사회=99, 과학=89}  
총점 : 472 평균 : 94.4  
  
*** 
  
### 과제 A : LinkedList에 1초 지연으로 10 9 .. 카운트 
```
package j2025_05_19;

import java.util.ArrayList;
import java.util.LinkedList;

public class 과제A {

	public static void main(String[] args) {
		/** 
		    ArrayList를 카운트다운 타이머로 사용할 수 있다. ArrayList에 정수
			들을 넣어놓고 차례대로 큐에서 정수들을 꺼내어 1초에 하나씩 화면
			에 출력하는 프로그램을 작성하자.
			- 큐 활용(LinkedList)
			- 1초 지연(Thread.sleep(1000);)
		 * */
		
		//안 써도 된다심: ArrayList<Integer> al = new ArrayList<Integer>();
		LinkedList<Integer> ll = new LinkedList<Integer>();
		
		for(int i = 0; i <= 10; i++) {
			ll.offer(10 - i);
		}
		
		int value = 0; 
		try {
			while(!ll.isEmpty()) { //아 맞다 ll.size() != -1는 크기 변동되지 
				Thread.sleep(1000);
				value = ll.poll();
				System.out.println(value);
			}
		} catch (Exception e) {
			System.out.println("알 수 없는 오류");
		}	
	}
}
```
  
### 과제 B : HashMap으로 영어사전 구현. 검색하면 있는 거 한글 출력 
```
package j2025_05_19;

import java.util.HashMap;
import java.util.Scanner;

public class 과제B {

	public static void main(String[] args) {
		/** Map을 사용하여 영어 사전을 구현해보자. 영어 사전에는 아래와 같이
			3개 단어에 대해 저장되어 있다. 사용자가 단어를 입력하면 단어의 설
			명이 출력되도록 처리하자. */
		
		HashMap<String, String> hm = new HashMap<String, String>();
		Scanner sc = new Scanner(System.in);
		
		hm.put("java", "자바"); //자바 넣으면 키값이라 키 옆에 value 를 갖고오는 게 get이다. 
		hm.put("school", "학교");
		hm.put("map", "지도");
		hm.put("quit", "퀵?");
		
		System.out.println("영어 뜻을 검색하세요 (java, map..) : ");
		String input = sc.next(); 

		//hm에 get(input) 로 검색하여 값 저장 + 출력 
		String hget = hm.get(input); 
		System.out.println(hget);
	}
}
```
영어 뜻을 검색하세요 (java, map..) :  
java  
자바  
  
### 과제 C : File입출력 + StringTokenizer 카운트 + HashMap 
```
package j2025_05_19;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.HashMap;
import java.util.Iterator;
import java.util.StringTokenizer;

public class 과제C {

	public static void main(String[] args) {
		//C번에 단어수는 size로 체크하시고 
		//문제가 파일입출력에서 잘해야 한다는 건데 
		//과제C는 파일입출력 + 토큰라이저 + 처음보는 부분으로 인해 GPT를 사용했습니다.
		
		/** 파일에 저장되어 있는 영어 단어들의 개수를 파악하여 화면에 출력해
			보자. 이때 File과 Map 객체를 활용하여 계산해보자.
			[활용 메소드] [실행 결과]
			- containsKey(String)
			- put(String, Integer)
			- get(String)
			- size()
			- keySet() */
		
		HashMap<String, Integer> hm = new HashMap<String, Integer>();
	
		// 1. 파일 
		File file = new File("C:/Users/epslk/Desktop/자바수업파일/Java/src/j2025_05_19/test.txt"); //그냥 test.txt현재경로로 하면 안뜸tv 
		//System.out.println("파일 존재? " + file.exists());
		
		try {
			// 2. FileReader로는 바로 못쓴다? BufferedReader로 감싸라 (AI)
			BufferedReader br = new BufferedReader(new FileReader(file)); 
			
			// 3. line에 br.readLine()메소드 한 걸 가져오기. 저장해서 null 아닌지 체크 
			String line; 
			while((line = br.readLine()) != null) { //써먹게하게..? 
				StringTokenizer tk = new StringTokenizer(line);
				
				while(tk.hasMoreTokens()) {
					String word = tk.nextToken(); 
					if(hm.containsKey(word)) {
						hm.put(word, hm.get(word) + 1); 
					} else {
						hm.put(word, 1); 
					}
				}
			}
			br.close(); 
			
			//4. 순회자 적용
			Iterator<String> it = hm.keySet().iterator(); 
			while(it.hasNext()) { //있는 동안 
				String key = it.next(); 
				System.out.println(key + "--->" + hm.get(key));
			}
			
			/** // for기본형 쓰려면: keySet 배열로 바꾸고 전통 for문으로 순회
				String[] keys = hm.keySet().toArray(new String[0]);
				for (int i = 0; i < keys.length; i++) {
				    String key = keys[i];
				    System.out.println(key + "-->" + hm.get(key));
				} */
			
			System.out.println("합계: " + hm.size());
		} catch (Exception e) {
			System.out.println("알 수 없는 오류: 404 Not Found\n파일이 있는지 확인을 해주시길 바랍니다.");
		}  		
	}
}
```
#### test.txt 
```
ddas a dasasd
addas
daasd
d sa d
asdads d aa sd
dassad
asdads dsaa sda das
asdasddsadsa 
잉....화난다 소난다
```
  
aa--->1  
dsaa--->1  
a--->1  
d--->3  
잉....화난다--->1  
asdasddsadsa--->1  
dasasd--->1  
sa--->1  
sd--->1  
dassad--->1  
sda--->1  
addas--->1  
asdads--->2  
das--->1  
소난다--->1  
daasd--->1  
ddas--->1  
합계: 17  
  
### 과제 D : ArrayList를 이용해 10번 입력받아 간단한 합 구하기 
```
package j2025_05_19;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class 과제D {

	public static void main(String[] args) {
		//min max 로 출력 
		
		ArrayList<Double> al = new ArrayList<Double>();
		Scanner sc = new Scanner(System.in); 
		Double input = 0.0; 
		Double sum = 0.0;
		
		for(int i = 0; i < 10; i++) {
			System.out.println((i+1) + "번째의 심사의원의 점수: ");
			input = sc.nextDouble(); 
			al.add(input);
			sum = sum + input;
		}
		
		int count = al.size(); //10개
		System.out.println("점수 합 : " + sum);
		System.out.println("점수 평균 : " + sum / count);
		
		System.out.println("최대값: " + Collections.max(al));
		System.out.println("최소값: " + Collections.min(al));
	}
}	
```
1번째의 심사의원의 점수:  
10  
2번째의 심사의원의 점수:  
9  
3번째의 심사의원의 점수:  
8  
4번째의 심사의원의 점수:  
7  
5번째의 심사의원의 점수:  
6  
6번째의 심사의원의 점수:  
5  
7번째의 심사의원의 점수:  
4  
8번째의 심사의원의 점수:  
3  
9번째의 심사의원의 점수:  
2  
10번째의 심사의원의 점수:  
1  
점수 합 : 55.0  
점수 평균 : 5.5  
최대값: 10.0  
최소값: 1.0  
  
