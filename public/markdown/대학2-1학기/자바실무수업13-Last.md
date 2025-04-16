1. 계산기문제
2. 유틸리티 패키지 UI로
3. 파일입출력 필수

UI는 이제 알아서 하쇼 ^^ 시험이라심  
텍스트 파싱해서 각각 뿌려라 등  
로또번호 역으로 sort해서 할 수도 있다.  
  
*** 

### 로또번호 Random 클래스 
```
package asd;

import java.awt.Container;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Arrays;
import java.util.Random;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class Tasl05 extends JFrame implements ActionListener {

	JButton btn; 
	JLabel jl; 
	
	
	public Tasl05() {
		Container ct = getContentPane(); 
		ct.setLayout(new FlowLayout());	

		
		//new 객체생성 시작 
		btn = new JButton("로또 번호 생성하기"); 
		jl = new JLabel("버튼을 눌러주세요"); 
		
		//이벤트 등록 
		btn.addActionListener(this); 
		
		//화면에 붙이기
		ct.add(btn);
		ct.add(jl); 
		
		setTitle("로또");
		setSize(300,200); 
		setVisible(true); 
	}
	
	public static void main(String[] args) {
		new Tasl05();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		Random r = new Random();
		int lotto[] = new int[6]; 
		
		int i = 0; 
		
		int temp = 0;
		
		a: while(i < 6) // i가 6보다 작을 동안 돌기 
		{
			//lotto[i] 대신 temp 해서 전이랑 똑같은지 비교해서 하자 
			temp = r.nextInt(45) + 1; //최대값까지 0~44 + 1 
			
			for(int j = 0; j <= i; j++) //현재 i 위치까지 
			{
				if(lotto[j] == temp) //temp 저장된 난수랑 비교. 전이랑 같으면? 
				{
					continue a; //책갈피 꽂다! a: 레이블로 이동해라! 
				} 
			}
			
			lotto[i] = temp; //현재 저장된 로또인덱스번호들 저장해라! 
			
			i++;
		}
		
		Arrays.sort(lotto); //오름차순해서 정렬도 가능 
		
		jl.setText(Arrays.toString(lotto)); //화면에 텍스트 출력을 위함 + 숫자 스트링변환 한방에. 출력
	}
}
```

### StringTokenizer 로 글자 파싱하기 
```
package asd;

import java.util.StringTokenizer;

public class Tasl06 {

	//UI는 이제 알아서 하쇼 ^^ 시험이라심 
	//텍스트 파싱해서 각각 뿌려라 등 
	//로또번호 역으로 sort해서 할 수도 있다. 
	
	public static void main(String[] args) {
		//문자열을 어떻게 나눌진 펌웨어, 하드웨어 개발자 마음이다. 
		//이걸 토큰으로 자른다는 게 토큰라이저. 파싱하다. 
		String s1 = "국적 대한민국 성명 홍길동 성별 남 주소 서울시"; 
		String s2 = "국적,대한민국,성명,홍길동,성별,남,주소,서울시"; 
		String s3 = "국적;대한민국;성명;홍길동;성별;남;주소;서울시"; 
		
		StringTokenizer st1 = new StringTokenizer(s1); //토큰자르기 아래서 불러오자 
		
		while(st1.hasMoreTokens()) //.hasMoreTokens() 토큰이 남아있냐 
		{
			String first = st1.nextToken(); //nextToken() 국적 first 갖고오고 한 번 더 돌아서 다음꺼 ... 
			String second = st1.nextToken(); //위에서 국적 하면 얘가 다음 대한민국 끌고옴 위에서 성명하면 여긴 홍길동, 인덱스순으로 
			System.out.println(first + "\t" + second);
		}
		
		System.out.println();
		
		//디폴트가 공백이기에 생성자에 ,라고 명시해주자 
		StringTokenizer st2 = new StringTokenizer(s2, ",");
		
		while(st2.hasMoreTokens()) //.hasMoreTokens() 토큰이 남아있냐 
		{
			String first = st2.nextToken(); //nextToken() 국적 first 갖고오고 한 번 더 돌아서 다음꺼 ... 
			String second = st2.nextToken(); //위에서 국적 하면 얘가 다음 대한민국 끌고옴 위에서 성명하면 여긴 홍길동, 인덱스순으로 
			System.out.println(first + "\t" + second);
		}
		
		System.out.println();
		
		StringTokenizer st3 = new StringTokenizer(s3);
		
		while(st3.hasMoreTokens()) //.hasMoreTokens() 토큰이 남아있냐 
		{
			String first = st3.nextToken(";"); //nextToken() 국적 first 갖고오고 한 번 더 돌아서 다음꺼 ... 
			String second = st3.nextToken(";"); //위에서 국적 하면 얘가 다음 대한민국 끌고옴 위에서 성명하면 여긴 홍길동, 인덱스순으로 
			System.out.println(first + "\t" + second);
		}
	}
}
```

### Scanner로 파싱 보완 
```
package asd;

import java.util.Scanner;

public class Task07 {
	public static void main(String[] args) {
		String s1 = "국적 대한민국 성명 홍길동 성별 남 주소 서울시"; 
		String s2 = "국적,대한민국,성명,홍길동,성별,남,주소,서울시"; 
		String s3 = "국적;대한민국;성명;홍길동;성별;남;주소;서울시"; 
		
		//()에 system.in 키보드 system.out 모니터, string 넣어 string 토큰라이저 가능 
		Scanner sc = new Scanner(s3); //여기 바로 s1해도 돌아감 
		
		sc.useDelimiter(";"); //useDelimiter 스캐너에 구분자가 뭔지 알려주는 기능 메소드만 다르고 기능 같네! 
		
		while(sc.hasNext()) {
			String first2 = sc.next(); //next 공백전까지 문자열받기 
			String second2 = sc.next();
			
			System.out.println(first2 + "\t" + second2); 
		}
	}
}
```
  
***
  
### 파일(phone.txt)에서 학번검색 -> 전번 출력 
```
package asd;

import java.io.File;
import java.util.Scanner;

public class Task08 {
	public static void main(String[] args) throws Exception { //예외가 상세하진 않지만 간단 예외처리가능 
		
		Scanner sc1 = new Scanner(System.in); //키보드를 노리는 스캐너
		
		System.out.print("검색하고자 하는 학생 학번 입력: ");
		String id = sc1.next();
		
		Scanner sc2 = new Scanner(new File("C:/phone.txt")); //파일을 노리는 스캐너
		
		while(sc2.hasNext()) //데이터가 존재하는 동안 
		{
			if(id.equals(sc2.next())) //입력값 sc1과 비교해서 일치하는 게 있다면? 
			{
				System.out.println(id + "의 전화번호 : " + sc2.next());
				return; 
			} else {
				sc2.next(); //출력없이 반복으로 함 더 넘기기~ 
			}
		}
		System.out.println(id+"은 존재하지 않는다!");
	}
}
```
  
### phone.txt 
```
A001 010-111-1111
A002 010-222-2222
A003 010-333-3333
A004 010-444-4444
A005 010-555-5555
```
  
검색하고자 하는 학생 학번 입력: A001  
A001의 전화번호 : 010-111-1111  
  
