import React from 'react';

import {Container,
  LogoImg,
  BoxInfo,
  BoxInfoText,
  Title,
  Name,
  BoxSettings,
  BoxSettingsText
}
from './Styles';

import {View} from 'react-native'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <Container>
      <LogoImg source={logo} resizeMode="contain"/>
    

      <BoxInfo>

        <BoxInfoText>
          <Title>Bom dia</Title>
          <Name>Mateus</Name>
        </BoxInfoText>

        <BoxSettings>
          <BoxSettingsText>RL</BoxSettingsText>
        </BoxSettings>
        
      </BoxInfo>
    </Container>
  )
}