import styled from 'styled-components/native';
import {Animated} from 'react-native'
 
export const Container = styled(Animated.View)`
  /* flex: 1; */
  background: #FBFBFB;
  /* width: 200px; */
  padding: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  
  /* position: absolute;
  left: 0;
  top: 250px;
  right: 0; */
`

export const BoxSaldo = styled.View`
  /* flex: 1; */
  background : #F6F5F8;
  padding: 20px;
  border-radius: 10px;
  flex-direction: column;
 
  
`
export const BoxSaldoRow = styled.View`
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`


export const Bold = styled.Text`
  color :#000;
  font-size: 30px;
  font-weight:bold;
`
export const Show = styled.TouchableOpacity``

export const ShowText = styled.Text`
  color :#000;
  text-transform: uppercase;
  text-decoration-line: underline;
`
export const Saldo = styled.Text`
  color :#777;
  
`
export const SaldoTitle = styled.View`
  flex-direction: row;
  align-items: center;
`
export const IconPais = styled.Image`
  width: 20px;
  height: 20px;
`

export const SaldoText = styled.Text`
  color: #777;
  padding-left: 10px;
  font-size: 17px;
`
