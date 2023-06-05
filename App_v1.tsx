/* eslint-disable no-lone-blocks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import Box from './components/Box';
import {Button, SafeAreaView} from 'react-native';
/*
<View> 태그는 주로 레이아웃을 구성하기 위해 사용되는 컨테이너이지만,
커스텀한 컴포넌트는 그 자체로 레이아웃을 구성할 수 있습니다.
*/

{
  /* 1. 주석 입력 방법 */
}
// 2. 이렇게 입력

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {visible && <Box rounded={true} size="large" color="green" />}
    </SafeAreaView>
  );
};

// 간단하게 반환하는 코드라면 중괄호, return 생략 가능
/*
const App = () => (
  <SafeAreaView>
    <Greeting name="김주원" />
  </SafeAreaView>
);
*/

export default App;
