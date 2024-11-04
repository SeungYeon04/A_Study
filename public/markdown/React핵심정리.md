### 리액트 수업 핵심정리 (추가수업) 

1. git 설치  
https://git-scm.com/downloads  
  
cmd 명령  
git config --global user.name SeungYeon04  
git config --global user.name epsl.kwm@gmail.com  
git config --global --list  
  
2. nvm-setup.exe 설치  
https://github.com/coreybutler/nvm-windows/releases/
  
nvm install 18.12.0  
nvm list (로 node 보유 리스트 확인)  
nvm use 18.12.0 (사용 버전 변경)  
  
node -v (v18.12.0)  
nvm list (* 18.12.0 (Currently using 64-bit executable))  
  
3. 노트패키지매니저 설치  
  
npm install -g create-react-app  
  
소스 출처(궁금증): https://github.com/facebook/create-react-app  
공식 사이트: https://www.npmjs.com/packge/create-react-app  
  
4. 우리 웹 프로젝트 경로에서 기본 패키지 설치  
  
npx create-react-app mini blog (명령 패키지 자체가 mini blog였네..)  
  
5. 설치할 패키지들  
  
npm install -d tailwindcss postcss autoprefixer  
npm install react-query (전 오타: npm install tract-query)  
npm install react-router-dom  
npx tailwindcss init -p  
  
6. 확장프로그램설치 (취향)  
Auto Rename Tag  
Auto Close Tag  
Bracket pair colorizer DLW  
color Highlight  
indent-rainbow  
korean  
material icon theme  
  
7. tailwind.config.js 파일수정
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
  
9. 리액트 웹 열기  
  
npm start  
  
http://localhost:3000/ 뜰 거임.  
  
물론 이번에 설치한 mini 경로에서 명령 쳐야 함.  
  
9. 마크다운 블로그를 위한 명령  
npm install react-markdown remark-gfm
  
10. 라우팅을 위한 명령  
npm install react-query  
npm install react-router-dom  
npm install recoil  
  
---  
  
(이그오너 내용) .gitignore  
```
# Created by https://www.toptal.com/developers/gitignore/api/visualstudiocode,react
# Edit at https://www.toptal.com/developers/gitignore?templates=visualstudiocode,react

### react ###
.DS_*
*.log
logs
**/*.backup.*
**/*.back.*

node_modules
bower_components

*.sublime*

psd
thumb
sketch

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix

### VisualStudioCode Patch ###
# Ignore all local history of files
.history
.ionide

# End of https://www.toptal.com/developers/gitignore/api/visualstudiocode,react
```
  
1. 깃 커밋 푸쉬  
  
git config --global --list (이름 메일 확인)  
  
git add . (.은 모든파일 올리기)  
  
git remote add origin  https://github.com/SeungYeon04/mini-blog.git (깃헙에 뜨는 경로 그대로 설정하면 됨.)  
  
git commit -m "init" (커밋 ""안에는 커밋메세지)  
  
git push --set-upstream origin master (메인에 때려박기)  
git push --set-upstream origin main 일 수도 있음. 둘 중 하나.  
  
git push  
  
2. 수정이력 받아오기  
  
전에 수정 이력이 있다면?  
  
git pull  
  
git add .  
git commit -m "메세지"  
  
git push  
  
3. 브런치 (귀찮아서 메모 복붙)  
  
git branch feat/blog  
  
git branch  
  
결과:  
```
D:\blog\mini>git branch 
  feat/blog
* master
```
*** 
  
vscode 확장 프로그램  
GitLens — Git supercharged  
이건 깃 올리고 오류 낸 사람 다 추적 가능.  
  
Git Graph  
깃 잘 하면 가지 다 보여주는데 이쁘게 나옴  
  
*** 
  
개발 관련 정보 많이 뜨는 사이트  
https://news.hada.io/  
  
*** 
  
브런치 이동  
git checkout feat/blog  
git branch  
  
결과: 
```
D:\blog\mini>git branch
* feat/blog
  master
```
*** 

git 명령어 다 치면 많이 나옴  

*** 

WSL = 윈도우에 서버 OS로 리눅스 설치 가능  
홈 버전에선 안 됨. 윈도우 하위 시스템.  
독커 써도 된다고 하심.  

*** 
브런치로 커밋  
  
git add .  
git commit -m "feat : add 글쓰기"  
git push --set-upstream origin  feat/blog  
git push  
  
그 이후부턴 push하면 알아서 내껄로 가던가?  

*** 

깃허브에서 풀리퀘스트  
마스터 < 내 브런치  
수정사항 확인 후 크리에이트  
크리에이트 풀 리퀘스트 버튼 클릭  
  
그리고 머지 풀 리퀘스트 하면 합쳐짐.  
  
https://github.com/SeungYeon04/mini-blog/pull/1  
  
Reviewers - No reviews 기능으로 사수한테 리뷰 후 피알 날리게 설정 가능  

*** 

npm install react-markdown remark-gfm (명령)  
패키지.js 안에 dependencies 생김.  
리액트는 가볍고 설치거리 많다.  
  
