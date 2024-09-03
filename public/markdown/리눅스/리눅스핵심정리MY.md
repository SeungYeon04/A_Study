GPT 가 아닌 직접 찾은 핵심이나 강의 내용  
아 물론 시험용 정보 모음집이다.  

참고자료 & 참고하기 좋은 자료:  
vim: https://youtu.be/cY0JxzENBJg?si=JF0nsHO5DenAt86R  
CBT: https://www.comcbt.com/  
  
표준 유닉스 시스템 콜 == OSS  
  
make 설치  
configure > make > make install  
  
cmake 설치  
cmake > make install  
  
|패키지|온라인|오프라인|
|------|---|---|
|우분투|apt-get|dpkg|
|레드햇|yum|rpm|
|수세|zypper|YaST| 

### Vim 

#### 네비게이션

esc 명령모드로  
i 커서 앞(insert)  
a 커서 뒤(append)  
I 문장 시작  
A 문장 끝  
  
H 왼쪽 ←  
J 아래 ↓  
K 위 ↑  
L 오른쪽 →  
  
(한 줄의)  
0 문장 앞  
$ 문장 뒤  
w 단어씩 앞으로 (word)  
(w3 누르면 단어 3개씩 앞으로 점프)  
b 단어씩 뒤로 (backword)  
(b3 누르면 단어 3개씩 뒤로 점프)  
  
H 화면 위  
M 화면 중간  
L 화면 끝  
gg 현재 파일 맨위  
G 현재 파일 맨끝  
(20G = 20번째 줄)  
  
ctrl u 위로 스크롤링  
ctrl d 아래로 스크롤링  
{ 문단시작  
} 문단끝  
  
#### 명령어 

*** 

### 셸 

셸은 커널에 종속되지 않았고,  
배포판에 따라 여러 셸을 사용한다.  
일반적으로 셸을 부여하지 않으면 로그인 막는 효과에  
사용자로부터 명령 받아 해석하고 실행  
유닉스 버전7의 기본 셸은 스티븐 본이 개발한 본셸이다.  

### RAID 

스트라이핑: RAID0에서 사용. 여러개의 디스크를 합쳐서 하나의 디스크처럼 사용. 하나의 데이터를 여러 디스크에 나눠서 쓰기 때문에 이론상 디스크 수만큼 읽기 쓰기 속도가 빨라짐.  
미러링: RAID1에서 사용. 말 그대로 디스크 이중화.  
패리티: RAID5,6에서 사용. 데이터 복구.  
ECC: RAID3. 유명무실..  
  
### LVM 순서 
PV-VG-LV  

### 프린트 명령어 
lpq, lpstat: 프린트 큐 확인  
lp : /dev/lp 사용  
프린터 디바이스 path를 사용하여 직접 인쇄  
EX) cat test.txt > /dev/lp  
lpr : 인쇄 작업을 수행  
lprm : 프린터 큐의 작업을 삭제할 때 사용  

###  vsftpd 패키지 제거 
remove: 패키지 제거 = apt-get remove vsftpd  
purge: 환경설정까지 삭제 = apt-get purge vsftpd  




