세팅만 하는 것이다  
  
사실 안 적을라고 했지만  
갑자기 마이그레이션 명령도 들어가서 적도록 하겠습니다.  
나의 경로는 D:\JSPBook_202318021승연\JSPBooks\src\main\webapp\WEB-INF\lib  
나는 여기서 cmd 때렸다.  
  
- jstl-1.2.jar (404.5KB)  
- taglibs-standard-impl_mi.jar (202KB)  
- taglibs-standard-jstlel_mi.jar (159.6KB)  
- taglibs-standard-spec_mi.jar (39.5KB)  
- jakartaee-migration-1.0.9-shaded.jar (1.2MB)  
  
이것들 다운하고  
걍 그 경로에 명령 때리기 마이그레이션  
일단 리브 경로에 넣고 그 경로에서 명령 때려라  
  
### 마이그레이션 명령 
java -jar jakartaee-migration-1.0.9-shaded.jar taglibs-standard-spec_mi.jar taglibs-standard-spec_mi-migrated.jar  
java -jar jakartaee-migration-1.0.9-shaded.jar taglibs-standard-impl_mi.jar taglibs-standard-impl_mi-migrated.jar  
java -jar jakartaee-migration-1.0.9-shaded.jar taglibs-standard-jstlel_mi.jar taglibs-standard-jstlel_mi-migrated.jar  
  
*** 
  
jstl jar 파일 을 새로 받아 작업하세요.  
아래 파일은 마이그레이션 하실필요 없습니다.  
  
### 담시간 또 설치하라고 하셨다 
https://mvnrepository.com/artifact/jakarta.servlet.jsp.jstl/jakarta.servlet.jsp.jstl-api/3.0.0  
https://mvnrepository.com/artifact/org.glassfish.web/jakarta.servlet.jsp.jstl/3.0.1  
  
대략 설치되는 게  
- jakarta.servlet.jsp.jstl-api-3.0.0.jar (45KB)  
- jakarta.servlet.jsp.jstl-3.0.1.jar (3.5MB) 이런 거 설치함  
  
