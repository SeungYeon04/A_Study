### 직렬화(Serialization) 

C#에서 직렬화(Serialization)는 객체를  
데이터 형식으로 변환하여, 저장하거나 전송할 수 있게 해주는 과정  
주로 JSON, XML, 바이너리 형식으로 직렬화할 수 있습니다.  

```
using System;
using System.Text.Json; 

public class P 
{
    //public string Name { get; set; } 같은 문법은 속성을 정의한 것.  
    //클래스의 데이터를 캡슐화하여 읽기 및 쓰기 작업을 쉽게 할 수 있게 함 
    public string Name { get; set; }   
    public int Age { get; set; } 
}

class Program
{
    static void Main()

        //귀찮으니 XML, Binary 직렬화는 나중에:) 
    {
        //객체 생성 
        P person = new P { Name = "Alice", Age = 30 }; 

        //JSON 으로 직렬화 
        string Create_Json = JsonSerializer.Serialize(person); 
        Console.WriteLine(Create_Json);
        //{"Name":"Alice","Age":30}

        //JSON을 객체로 역직렬화 
        P deserializedPerson = JsonSerializer.Deserialize<P>(Create_Json); 
        Console.WriteLine($"Name: {deserializedPerson.Name}, Age: {deserializedPerson.Age}");
        //Name: Alice, Age: 30 
    }
}
```

#### Json 다시 정리 

1) 이런 객체가 존재 
```
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}
```
2) 새 객체 생성 직렬화 
```
Person person = new Person { Name = "Alice", Age = 30 };
string jsonString = JsonSerializer.Serialize(person);
```
3) Create_Json는 이 문자열을 가짐 
```
{"Name":"Alice","Age":30}
```
{}는 Json 객체를 감쌈  
"Name": 속성의 이름(키)  
"Alice": 속성의 값  
"Age": 또 다른 속성의 이름  
30: 또 다른 속성의 값  

역직렬화는 직렬화된 데이터를 원래의 객체로 변환하는 과정  
문자열을 다시 객체로 변환하려면 역직렬화  

#### 간단한 타입 설명 

```
public 타입 속성명 { get; set; }
```
get은 속성 값을 읽을 수 있게 하고,  
set은 속성 값을 설정할 수 있게 함  
  
get set은 데이터접근제어 캡슐화로 데이터 무결성 검사 유용하다고 함  
대량의 데이터나 복잡한 구조는 때에 따라  
데이터베이스, 컬렉션, 메서드 등 쓰는 게 좋은가봄  

Json 같이 파일처리로 데이터 관리하면  
중요한 데이터는 하드코딩 금지에 암호화 필수인 듯  
  
