import React from 'react';


import {Text} from 'react-native';

import {Container} from './Styles';


import Header from '../../components/Header';
import ScrollApp from '../../components/ScrollApp';


export default function App() {
  return (
    <Container>
      <Header/>
      <ScrollApp/>
    </Container>
    );
  }
  
  