import React,{useState} from 'react';

import {
  Container,
  BoxSaldo,
  BoxSaldoRow,
  Bold,
  Saldo,
  Show,
  ShowText,
  SaldoTitle,
  IconPais,
  SaldoText
} from './Styles';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import pais from '../../assets/brasil.png';

import ScrollViewHorizontal from '../../components/ScrollViewHorizontal';

import LatestTransation from '../../components/LatestTransation';


export default function ScrollApp() {
  const [showMoney, setShowMoney] = useState(true);

  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );


  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY == 0) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
    }
  }

  function handleShowMoney() {
    setShowMoney((prevState) => !prevState);
  }
  
  return (
    <PanGestureHandler 
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}
    >
     <Container style={{
        transform: [{
          translateY: translateY.interpolate({
            inputRange: [-700, 0, 380],
            outputRange: [-500, 0, 380],
            extrapolate: 'clamp'
          }),
        }]
      }}>
      <BoxSaldo>
      <SaldoTitle>
        <IconPais source={pais} resizeMode="contain"></IconPais>
        <SaldoText>Saldo</SaldoText>
      </SaldoTitle>

        <BoxSaldoRow>
          <Saldo>R$ <Bold>{ showMoney ? ' 0,00' : ' .....'}</Bold></Saldo>
          <Show onPress={handleShowMoney}>
            <ShowText>Exibir</ShowText>
          </Show>
        </BoxSaldoRow>
      </BoxSaldo>

      <ScrollViewHorizontal/>

      <LatestTransation/>
    
    </Container>
    </PanGestureHandler>
  )
}