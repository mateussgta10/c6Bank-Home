import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  background : #151515;
  /* height: 120px; */
`

export const LogoImg = styled.Image`
  width: 140px;
  height: 120px;
  align-self:center;
  /* background : transparent; */
  /* position: relative; */
`
export const BoxInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15px;
`
export const BoxInfoText = styled.View``

export const Title = styled.Text`
  font-size: 17px;
  color: #fff;
`
export const Name = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight:bold;
  margin-top: 8px;
`
export const BoxSettings = styled.TouchableOpacity`
  width :50px;
  height: 50px;
  background : #fff;
  border-radius: 25px;
`
export const BoxSettingsText = styled.Text`
  text-align: center;
  font-size: 17px;
  line-height: 45px;
`



