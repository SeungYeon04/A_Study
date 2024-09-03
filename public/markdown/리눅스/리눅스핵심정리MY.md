GPT 가 아닌 찾아보고 정리한 것이에요  
사실 GPT는 설명이 길어서 분리한 거에요:)  
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
x 커서 아래 글자 삭제  
dd 문장 삭제  
yy 문장 복사  
p 붙여넣기  
*p 클립보드 붙여넣기(다른데서 복사한 거)  

#### command + object 설명 (시험X) 

command는 d(delete = cut), y(yank = copy), c(change)  
object는 aw 3w 3d it at ap as i" ip 같은 거다.  
명령 + 대상으로 여러가지 가능  
  
d3w 커서 위치에서 세 단어를 삭제  
dit 커서 근처부터 특정 태그 안에 모두 삭제  
daw 커서 앞뒤 상관 없이 이 단어 삭제  
등등..  

#### command + object 명령어 

. 이전 명령 다시 반복  
u 되감기  
Ctrl R 앞감기  

### 검색 명령어 
/ 검색모드  
n 검색한 프로젝트 이름 기준 프로젝트별로 찾기  
? 검색한 프로젝트 이름 기준 프로젝트별로 거꾸로 찾기  

### 선택 명령어 
v 셀렉터 하면서 나아감  
vaw 단어 하나를 셀렉트  
Ctrl v 블럭 단위로 셀렉트  

### vim 공부법 
터미널에서 vimtutor 입력해서 보기  
아니면 vim 공식문서 보기(전자책도 존재)  

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

*** 

### 여러 명령어들 
epel-release == 저장소의 구성 파일, 공개 키 포함 패키지  
make clean == 빌드 결과물과 중간 파일을 삭제  
작업을 새로 시작하기 전에 환경을 초기화하는 데 유용  
  
### 압축률 순서
xz>bz2>gz>compress  

### tar 명령의 압축 파일 명령어
.xz = Jxvf  
.bz2 = jxvf  
.gz = zxvf  
compress = Zxvf  
  
.xz = J  
.bz2 = j  
.gz = z  
compress = Z  
  
c : 압축파일 생성  
x : 압축파일 해제  
t : 아카이브 내의 파일 목록 보기  
v : 자세한 정보 출력  
f : 파일 이름 및 디렉토리 지정  
  
###  vsftpd 패키지 제거 
remove: 패키지 제거 = apt-get remove vsftpd  
purge: 환경설정까지 삭제 = apt-get purge vsftpd  
  
#### make  
configure → make → make install  

#### cmake 
cmake → make → make install  
cmake → make install  

