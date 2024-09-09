C#에서 "직렬화(Serialization)"는 객체를  
데이터 형식으로 변환하여 저장하거나 전송할 수 있게 해주는 과정입니다.  
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
위에꺼 정리하자면  

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
