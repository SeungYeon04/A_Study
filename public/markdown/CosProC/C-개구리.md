

### 날짜
2024년 08월 06일  

### 어려웠던 것

뭔가 어떤 식으로 하는 건지는 알았는데,  
current 가 어떤 용도의 함수인지 몰라 보았다.  

### 어려웠던 것 정리 

current < stones_len 은 
current 보다 stones_len 가 많아지면 끝냄.  
current는 개구리 위치  
stones[current]는 현재 위치의 징검다리에 적힌 숫자 (즉, 점프할 거리)  
cnt는 점프 횟수  
stones[] 는 징검다리들  
stones_len 는 징검다리 길이  
  
개구리: 현재 위치를 나타내는 current 변수로 관리  
징검다리: stones 배열에 각 징검다리에 적힌 숫자가 저장되어 있음  
점프: 개구리는 현재 위치에서 stones[current]만큼 앞으로 점프  
목표: 개구리가 모든 징검다리를 건널 때까지의 최소 점프 횟수를 구함  

***

### 문제 

```  
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int stones[], int stones_len) {
    int cnt = 0;
    int current = 0;
    while(current < stones_len ) { 
        current += stones[current];
        cnt++;
    }
    return cnt;
} 

```
