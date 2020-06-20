import React from 'react';

import {Container, ContainerView, ContainerText, Icon} from './Styles';
import { AntDesign } from '@expo/vector-icons'; 

import icon from '../../assets/icon.jpg';
export default function ScrollViewHorizontal() {
  return (
    <Container>

      <ContainerView>
      <Icon source={icon} resizeMode="contain"/>
        <ContainerText>CARTÃO</ContainerText>
      </ContainerView>

      <ContainerView>
      <Icon source={icon} resizeMode="contain"/>
        <ContainerText>CARTÃO</ContainerText>
      </ContainerView>

      <ContainerView>
      <Icon source={icon} resizeMode="contain"/>
        <ContainerText>CARTÃO</ContainerText>
      </ContainerView>

      <ContainerView>
      <Icon source={icon} resizeMode="contain"/>
        <ContainerText>CARTÃO</ContainerText>
      </ContainerView>

      <ContainerView>
      <Icon source={icon} resizeMode="contain"/>
        <ContainerText>CARTÃO</ContainerText>
      </ContainerView>

      <ContainerView>
      <Icon source={icon} resizeMode="contain"/>
        <ContainerText>CARTÃO</ContainerText>
      </ContainerView>


    </Container>
  )
}