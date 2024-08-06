

<h3>날짜</h3>
2024년 08월 06일  

<h3>어려웠던 것</h3>

<h3>어려웠던 것 정리</h3>

***

<h3>문제</h3>

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
