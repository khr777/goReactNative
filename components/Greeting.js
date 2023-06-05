import React from 'react';
import {View, Text} from 'react-native';

// 컴포넌트 선언 방법
// 1. 함수로 컴포넌트 선언
// 2. 클래스로 컴포넌트 선언 (2018년 전에 주로 사용하던 방법)\
// 3. 함수로 선언한 컴포넌트에서는 아래와 같이 XML형태로 이루어진 내용을 반환해주어야 한다. 이러한 문법을 JSX라 한다.

function Greeting(props) {
  return (
    <>
      <View>
        <Text>안녕하세요 {props.name}!</Text>
      </View>
      <Text>Extra Text!</Text>
    </>
  );
}

// name 속성에 아무값도 주입하지 않았을 때 기본으로 보여줄 값 설정
Greeting.defaultProps = {name: '리액트 네이티브'};

export default Greeting;
