### 날짜 
2024년 08월 07일  

### 설명

### 문제 설명  
고객이 구매한 물건들의 가격과 지불 금액이 주어졌을 때, 거스름돈을 얼마나 줘야 하는지 구하려 합니다.  
예를 들어 구매한 물건들의 가격이 {2100, 3200, 2100, 800}이라면 총 구매금액은 8200원입니다.  
이때, 고객이 10000원을 지불했다면 1800원을 거슬러 주면 됩니다.  
  
고객이 구매한 물품들의 가격이 들어있는 배열 price와 price의 길이 price_len,  
지불한 금액 money가 매개변수로 주어질 때, 거슬러 줘야 하는 금액을 return 하도록 solution 함수를 완성해주세요.  
  
매개변수 설명  
고객이 구매한 물품의 가격이 들어있는 배열 price와 price의 길이 price_len,  
지불한 금액 money가 solution 함수의 매개변수로 주어집니다.  
  
price의 길이 price_len은 1 이상 50 이하의 자연수입니다.  
price의 요소는 고객이 구매한 물품의 가격이며, 10 이상 100,000 이하의 자연수입니다.  
money는 10 이상 5,000,000 이하의 자연수입니다.  
  
return 값 설명  
고객에게 거슬러 줘야 하는 금액을 return 하도록 solution 함수를 작성해주세요.  
구매 금액보다 지불 금액이 작은 경우에는 -1을 return 해주세요.  

### 어려웠던 것

다 잘 됐는데 return -1 하라는 걸 못 봐서  
뭐가 문젠가 했다는..  

***

### 문제 

```
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int price[], int price_len, int money) {
    
    int answer = 0;
    
    for(int i = 0; i < price_len; i++)
    {
        money -= price[i]; 
        
        if(money < 0){
            return -1; 
        } 
    }
    
    answer = money; 
        
    return answer;
}
```
