import styled from 'styled-components/native';
// import {Animated} from 'react-native'
export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 3,
  }
}))`
  /* height: 130px; */
`;

export const ContainerView = styled.TouchableOpacity`
  width: 80px;
  padding: 10px;
  /* background:red; */
  border-radius: 30px;
  margin-right: 16px;
  align-items: center;
`
export const ContainerText = styled.Text`
  font-size: 12px;
  margin-top: 10px;
`
export const Icon = styled.Image`
  width: 50px;
  height: 50px;
  background: transparent;
`


