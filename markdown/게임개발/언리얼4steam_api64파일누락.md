언리얼4로 플러그인 폴더 자동생성해도 비어있는 거 많더라  
스팀게임 구현하는데 알아서 좀 됐으면 편한데  
멋대로 파일 누락이야ㅡㅡ  
  
### 경로문제 로그 
다른 친구가 D드라이브를 써서..  
이런 오류가 났어요  
UEBuildModule.CreateDirectoryHashSet: D:\B_TeamGame\TeamProject427\Source\TeamProject427\TeamProject427.Build.cs: warning: Referenced directory 'C:\Program Files\Epic Games\UE_4.27\Engine\Source\ThirdParty\Steamworks\Steamv151\sdk\public' does not exist.
  
### 누락 파일 위치 
드라이브는 사람마다 다를 수는 있는데  
C:\Program Files\Epic Games\UE_4.27\Engine\Source\ThirdParty\Steamworks\Steamv151\sdk\redistributable_bin\win64 
이 경로에 api뭐시기.dll파일 추가 필수  
.liv인가 lib인가는 그냥 있더래요  
아 근데 경로찾기 눌러도 안될 때 많아요  
찾다가 수동으로 들어가서 찾은 1인  
  
### .dll 파일 설치 링크  
https://ko.dll-files.com/download/8fe4f5f3feefc50f25c5a1cd8485ba98/steam_api64.dll.html?c=SGhoTGxweDQ4ZEkxMjR6Ni9mTEFidz09  
  
