
# React Native 기초

### 1. 리액트 컴포넌트를 만들 때는 아래 코드를 꼭 입력해야 한다.
```
import React from 'react';
```

### 2. 컴포넌트를 선언하는 방법 2가지
- 함수 선언 : function
- 클래스 선언
  - 클래스는 2018년 전에 주로 사용하던 방법으로 지금은 잘 사용하지 않는다.


### 3. function, 화살표 함수 선언
- 기능적으로 차이는 없다.
- 화살표 함수의 경우, 간단하게 반환할 때 사용되며 중괄호/return 을 생략할 수 있다.
- 그치만 페이스북에서도 화살표 함수가 아닌 function 함수를 선언해서 리액트 네이티브를 개발한다고 한다.

### 4. JSX에서 자바스크립트 표현식을 보여줘야 할 때는 중괄호로 감사서 작성해야 한다.
- 자바스크립트 표현식 : 연산 결과, 함수 호출, 특정 변수 또는 상수


### 5. defaultProps 사용 익히기
- 리액트 컴포넌트에서 사용되는 정적 멤버 변수(static member variable)로서, 컴포넌트의 기본 속성 값을 정의하는 데 사용됩니다.

### 6. 반환할 때는 꼭 하나의 태그로 감싸기
- View태그를 남용하면 나중에 레이아웃 관련 작업이 귀찮아질 수 있으므로 JSX Fragment(빈 태그)를 사용하면 좋다.
```
<>
  <View><Text>컴포넌트</Text></View>
  <Text>텍스트입니다!!</Text>
</>
```

### 7. StyleSheet 컴포넌트에 스타일 입히기
- css 속성값들 확인
https://www.w3schools.com/css/default.asp
- react-native 모듈에서 불러와서 사용할 수 있다.
- css와 주요 차이점
  - 셀렉터라는 개념이 존재하지 않는다.
  - 모든 스타일 속성은 camelCase로 작성해야 한다.
  - display 속성은 기본적으로 flex이며, 다른 값은 none 밖에 없다.
  - flexDirection 속성의 기본값은 웹에서는 row이지만 react native에서는 column이다.
  - 리액트 네이티브에서 스타일링할 때 숫자 단위는 dp뿐이다.
  - background 대신 backgroundColor를 사용해야 한다.
  - border 대신 borderWidth, borderStyle, borderColor 등을 따로따로 설정해야 한다.
- 스타일들을 const 객체에 담아 props로 전달 받는 값에 따라 다른 스타일을 보여줄 수 있다.


