### 날짜 
2024년 08월 05일  

### 어려웠던 것 

이건 빈칸 채우기 문제에요  
func_c(visitor,n) 이런 부분  
글이 많아서 그거 읽고 빠르게 코드 이해하고  
뭔가 전달하는 게 아직 약하대요  
  
그리고 코테로 안 하고 C언어 수업에서  
int main으로 하다가 solution 보니까  
좀 많이 당황한 부분도 있어요  
그래서 시험에서 solution 쓴다면 풀코드는 아직 힘들지도.. 
  
``` 
    int max_first = func_
c(visitor,n)
;
    int* visitor_removed = func_
a(visitor,n, max_first)
;
    int max_second = func_
c(visitor_removed ,n-1)
;
    int answer = func_
b(max_first,max_second)
;
```

### 어려웠던 것 정리 

### 문제 

```
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* func_a(int arr[], int arr_size, int num){
    int* ret = (int*)malloc(sizeof(int)*(arr_size - 1));
    int idx = 0;
    for(int i = 0; i < arr_size; ++i)
        if(arr[i] != num)
            ret[idx++] = arr[i];
    return ret;
}

int func_b(int a, int b){
    if(a >= b)
        return a - b;
    else
        return b - a;
}

int func_c(int arr[], int arr_size){
    int ret = -1;
    for(int i = 0; i < arr_size; ++i)
        if(ret<arr[i])
            ret = arr[i];
    return ret;
}

int solution(int visitor[], int n ) {
    int max_first = func_
c(visitor,n)
;
    int* visitor_removed = func_
a(visitor,n, max_first)
;
    int max_second = func_
c(visitor_removed ,n-1)
;
    int answer = func_
b(max_first,max_second)
;
    return answer;
}
```
