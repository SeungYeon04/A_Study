프로그래머스에 있는 코딩테스트다.  
코딩은 0레벨 ~ 1레벨 정도로 시작하도록 함.  
나도 기초를 다지기 위함이기에  
물론 나는 검색 찬스를 좀 쓸 것이다.  
애초에 그나마 잘 나오는 게 자바인 듯.  
2급까지는 성공하기로 함.  
시험 생각보다 프로그래머스처럼 말 길게 꼬아 나옴.  
하지만 프로그래머스를 잘 할 정도면  
코스프로는 나름 쉬워질 것 같음.  

💡 참고는 벨로그와 GPT 사용.  
따라는 쳐도 복붙은 안 하기로 했어요  
https://velog.io/@yujeongkwon/posts  

Lv1. 가장 많이 받은 선물  
``` 
using System;

public class Solution {
    public int solution(string[] friends, string[] gifts) {
        
        int answer = 0;
        int giftIndex; 
        int getIndex; 
        
        int[,] giftNumber = new int[friends.Length,friends.Length]; 
        int[] giftAllNumber = new int[friends.Length] ; 

        int[] giftNextNumber = new int[friends.Length]; 
        
        
        for(int i =0; i < gifts.Length; i++) //각 선물기록 순회 
        {
            //선물을 준 사람과 받은 사람 분리 
            string[] fname = gifts[i].Split(' '); 
            //선물 준 사람의 인덱스를 찾음 
            giftIndex = Array.IndexOf(friends, fname[0]);
            //선물 받은 사람의 인덱스를 찾음 
            getIndex = Array.IndexOf(friends, fname[1]); 
            
            //해당 관계에 선물 수를 증가 시킴. 
            giftNumber[giftIndex, getIndex]++; 
            
            //선물 준 사람은 카운트 증가 
            giftAllNumber[giftIndex]++;
            //선물 받은 사람은 카운트 감소 
            giftAllNumber[getIndex]--;
        }
        
        
        for(int i = 0; i < friends.Length; i++) //각 친구 쌍들을 비교해서 다음에 선물 받을 가능성 계산 
        {
            for(int j = i+1; j < friends.Length; j++)
            {
                //j가 i에게 준 선물이 더 크면 
                if(giftNumber[i,j] > giftNumber[j,i])
                {
                    giftNextNumber[i]++; //i가 다음 선물 확률 증가 
                }
                else if(giftNumber[i,j] < giftNumber[j,i]) 
                {
                    giftNextNumber[j]++; 
                } 
                else 
                {
                    if(giftAllNumber[i] > giftAllNumber[j]) //i의 총 선물 수가 많다면 
                    {
                        giftNextNumber[i]++; //i가 다음에 선물 받을 확률 증가 
                    }
                    else if(giftAllNumber[i] < giftAllNumber[j])
                    {
                        giftNextNumber[j]++; 
                    }
                }
            }
        } 
        
        //선물받을 가능성을 배열로 정렬 
        Array.Sort(giftNextNumber); 
        //가장 높은 값을 answer에 저장 
        answer = giftNextNumber[friends.Length - 1]; 
        
        return answer;
    }
}
``` 

⏰️ 2024.07.21  
  
💬 선물을 직접 전하기 힘들 때  
카카오톡 선물하기 기능을 이용해  
축하 선물을 보낼 수 있습니다.  
당신의 친구들이 이번 달까지  
선물을 주고받은 기록을 바탕으로  
다음 달에 누가 선물을 많이 받을지 예측하려고 합니다.
두 사람이 선물을 주고받은 기록이 있다면,  
이번 달까지 두 사람 사이에  
더 많은 선물을 준 사람이  
다음 달에 선물을 하나 받습니다.  
예를 들어 A가 B에게 선물을 5번 줬고,  
B가 A에게 선물을 3번 줬다면  
다음 달엔 A가 B에게 선물을 하나 받습니다.  
두 사람이 선물을 주고받은 기록이  
하나도 없거나 주고받은 수가 같다면,  
선물 지수가 더 큰 사람이  
선물 지수가 더 작은 사람에게 선물을 하나 받습니다.  
선물 지수는 이번 달까지  
자신이 친구들에게 준 선물의 수에서  
받은 선물의 수를 뺀 값입니다.  
예를 들어 A가 친구들에게 준 선물이 3개고  
받은 선물이 10개라면 A의 선물 지수는 -7입니다.  
B가 친구들에게 준 선물이 3개고 받은 선물이 2개라면  
B의 선물 지수는 1입니다.  
만약 A와 B가 선물을 주고받은 적이 없거나  
정확히 같은 수로 선물을 주고받았다면,  
다음 달엔 B가 A에게 선물을 하나 받습니다.  
만약 두 사람의 선물 지수도 같다면  
다음 달에 선물을 주고받지 않습니다.  
위에서 설명한 규칙대로 다음 달에 선물을 주고받을 때,  
당신은 선물을 가장 많이 받을 친구가  
받을 선물의 수를 알고 싶습니다.  
  
📍 2 ≤ friends의 길이 = 친구들의 수 ≤ 50
friends의 원소는 친구의 이름을 의미하는  
알파벳 소문자로 이루어진 길이가 10 이하인 문자열입니다.  
이름이 같은 친구는 없습니다.  
1 ≤ gifts의 길이 ≤ 10,000  
gifts의 원소는 "A B"형태의 문자열입니다.  
A는 선물을 준 친구의 이름을  
B는 선물을 받은 친구의 이름을 의미하며  
공백 하나로 구분됩니다.  
A와 B는 friends의 원소이며  
A와 B가 같은 이름인 경우는 존재하지 않습니다.  
친구들의 이름을 담은 1차원 문자열 배열  
friends 이번 달까지 친구들이  
주고받은 선물 기록을 담은  
1차원 문자열 배열 gifts가 매개변수로 주어집니다.  
이때, 다음달에 가장 많은 선물을 받는 친구가  
받을 선물의 수를 return 하도록  
solution 함수를 완성해 주세요.
