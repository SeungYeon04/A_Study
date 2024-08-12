### 날짜
2024년 08월 07일  

### 어려웠던 것 

2차원을 어떻게 비교를 할까  
그리고 나는 index 개념을 잘 모른다.  

### 어려웠던 것 정리 

GPT 사용하였다.  
2차원 배열을 결국엔 크기 맞는 1차원 배열에 대입해서  
정렬 알고리즘으로 인덱스 k-1부터 k번째로 작은 수 찾는 방식인 듯하다.  
흑 이번 시험 어떡하냐  

***

### 오답문제 

```
#include <stdio.h>

// 버블 정렬을 위한 함수
void bubble_sort(int* array, int size) {
    // 배열의 크기만큼 반복
    for (int i = 0; i < size - 1; i++) {
        // 매번 반복할 때마다 정렬되지 않은 부분의 마지막 요소를 제외
        for (int j = 0; j < size - i - 1; j++) {
            // 현재 요소가 다음 요소보다 크면 교환
            if (array[j] > array[j + 1]) {
                int temp = array[j];        // 현재 요소를 임시 변수에 저장
                array[j] = array[j + 1];    // 다음 요소를 현재 위치로 이동
                array[j + 1] = temp;        // 임시 변수에 저장한 값을 다음 위치로 이동
            }
        }
    }
}

int solution(int** arr, int arr_row_len, int arr_col_len, int k) {
    // 최대 80개의 요소를 가진 정적 배열 선언
    int flat_array[80];
    
    // 2D 배열의 모든 요소를 1D 배열에 복사
    int index = 0;  // 1D 배열의 인덱스
    for (int i = 0; i < arr_row_len; i++) {
        for (int j = 0; j < arr_col_len; j++) {
            flat_array[index++] = arr[i][j];  // 2D 배열의 각 요소를 1D 배열에 저장
        }
    }

    // 1D 배열을 오름차순으로 정렬
    bubble_sort(flat_array, arr_row_len * arr_col_len);
    
    // k번째로 작은 수를 찾기 (k는 1부터 시작하므로 인덱스는 k-1)
    int result = flat_array[k - 1];
    
    return result;
}

```
