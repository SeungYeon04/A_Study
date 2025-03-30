[알고리즘 스터디](https://github.com/b-hyoung/data_structure)  
  
### ListIO_Test01.java 
```
package javaPack;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Scanner;

/** 연결리스트: 메모리 안 자료구조 / 파일입출력: 메모리 밖, 하디에 데이터저장 
 * 배열(String[]): 고정됨, 연속된 공간 
 * 연결리스트(LinkedList<String>: 가변적(자동 늘어남), 노드끼리만 연결, 노드만 연결삭제, 필요할 때마다 공간 씀  
 *  */

public class ListIO_Test01 {

	public static void main(String[] args) {
		/** 연결리스트(LinkedLst) = Node들이 체인처럼 연결된 자료구조 
		 * 배열은 크기고정 중간 삽입삭제 어렵고 늘리려면 새 배열 필요. 그래서 사용.  
		 * */ 
		LinkedList<String> nameList = new LinkedList<>(); 
		Scanner input = new Scanner(System.in); 
		
		// 1. 사용자로부터 이름을 입력받기 
		System.out.println("이름을 입력하세요 (5명): ");
		for(int i = 0; i < 5; i++) {
			System.out.println("> ");
			String name = input.nextLine(); 
			nameList.add(name); 
		}
		
		// 2. 정렬 (선택사항) 
		Collections.sort(nameList);
		
		// 3. 파일에 저장 
		try (BufferedWriter wr = new BufferedWriter(new FileWriter("C:/Users/epslk/Desktop/EclipseFile/TextFile/names.txt"))) {
			
			for(int i = 0; i < nameList.size(); i++) {
				String name = nameList.get(i); 
				/** 16진수로 바꿈 -> 주소처럼 출력 = 실제 메모리주소X, 해당 객체 String에 고유 식별값 ID를 출력 O.  
				 * System.identityHashCode(name), 구조 이해 공부를 위한, 주소인 척 보여주는용 "객체식별값". (자바는 주소 안 보여줌) 
				 * */
				String addr = "A" + Integer.toHexString(System.identityHashCode(name)).toUpperCase(); 
				
				wr.write("연결리스트의 주소: " + addr + "\n내용: " + name + "\n"); 
				wr.newLine(); //줄바꿈 
			}
			
			System.out.println("\n이름이 파일에 저장되었습니다.");
		} catch(IOException e) {
			System.out.println("파일 저장 중 오류 발생: " + e.getMessage());
		}
		/** 연결리스트를 왜 파일로 저장하냐?  
		 * 메모리: 휘발성 -> 데이터를 보존하려면 파일로 저장 필요. 
		 * 관리를 위해, name.List("승연"); -> 메모리 저장 / wr.writer("승연"); -> 파일로 보존 */
	}
}
```

#### 결과 
```
연결리스트의 주소: A3941A79C
내용: ㄴㅇㅇㅁㄴㄹ

연결리스트의 주소: A4783DA3F
내용: ㄹ

연결리스트의 주소: A378FD1AC
내용: ㅁ

연결리스트의 주소: A49097B5D
내용: ㅁㄴ

연결리스트의 주소: A6E2C634B
내용: ㅁㄴㅇ
```
  
### ListIO_Test02.java 
```
package javaPack;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.LinkedList;

public class ListIO_Test02 {

	public static void main(String[] args) {
		// 1. 연결 리스트 공간 다시 생성 
		LinkedList<String> nameList = new LinkedList<>(); 
		
		// 2. 가져올 파일 경로 지정 
		String filePath = "C:/Users/epslk/Desktop/EclipseFile/TextFile/names.txt"; 
		
		// 3. 파일에서 한 줄씩 읽어와서, 리스트에 추가 
		try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
			String line; 
			
			/** 4. reader(경로).readLine() 이 경로에 파일 한 줄을 읽고 String line 변수에 저장. 
				그리고 while 로 라인이 null이 아니라면 계속 반복 (!= null) EOF 구현완 */
			
			while((line = reader.readLine()) != null) {	
				/** 5. if의 line.trim(앞뒤공백제거메소드).isEmpty(문자열이 빌 때 true반환)
					문자열이 공백, 빈줄인 게 true면 건너뜀. !ture인 경우.
				*/
				if(!line.trim().isEmpty()) { 
					nameList.add(line); //리스트추가 
				}
			}
			
			System.out.println("파일에서 데이터를 읽어 연결리스트에 저장 완료\n");
			System.out.println("리스트 내용 출력: ");
			
			for(int i = 0; i < nameList.size(); i+= 2) {
				String adr = nameList.get(i); // 6. 주소의 인덱스 (주소 정보가 저장된 줄 가져오기)
				
				/** 7. 내용. (i + 1 < nameList.size()) = 
					기본 i값의 다음 줄의 내용(i+1), 빈 줄이라도 존재하면 ? nameList.get(i+1) : 아니면 빈 문자열 "" */
				
				String content = (i + 1 < nameList.size()) ? nameList.get(i + 1) : "";
				int index = (i / 2) + 1; 
				
				System.out.println(index + "번째 노드");
				System.out.println(adr); 
				System.out.println(content);
				System.out.println();
			}  
		} catch (IOException e) {
			System.out.println("파일읽기오류: " + e.getMessage());
		} 
	}
}
```

#### 결과 
```
파일에서 데이터를 읽어 연결리스트에 저장 완료

리스트 내용 출력: 
1번째 노드
연결리스트의 주소: A3941A79C
내용: ㄴㅇㅇㅁㄴㄹ

2번째 노드
연결리스트의 주소: A4783DA3F
내용: ㄹ

3번째 노드
연결리스트의 주소: A378FD1AC
내용: ㅁ

4번째 노드
연결리스트의 주소: A49097B5D
내용: ㅁㄴ

5번째 노드
연결리스트의 주소: A6E2C634B
내용: ㅁㄴㅇ
```
