
## VOC 구현 세부 내용

![main](./main.png)

### 필터

완료

### 정렬

완료

### 기본 콘텐츠

이슈

- 콘텐츠 스크롤시 추가적으로 랜더링할 때 warn 경고 발생 ( list.vue에서 광고 관련 문제 )

### 광고 콘텐츠

이슈

- Vue-Infinite-Loading @change를 통해 리셋하지 못해 deprecated 된 기능을 이용하여 구현
- 광고리스트 API 요청 결과 총 데이터 30개로 추정됨 이때문인지 카테고리를 50개까지밖에 못불러옴
  대신 빈데이터를 넣어봤으나 아직까지 미해결

### 모달

완료