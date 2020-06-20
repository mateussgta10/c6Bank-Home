import React from 'react';

import {Container,
  Title,
  BoxTrasations,
  TextDay,
  BoxTrasationsSigle,
  TextTrasations,
  Trasations,
  Type,
  Money
}
from './Styles';

import { AntDesign } from '@expo/vector-icons'; 




export default function LatestTransation() {
  return (
    <Container>
      <Title>Últimas transações</Title>

      <BoxTrasations>
        <TextDay>Hoje</TextDay>

        <BoxTrasationsSigle>
        <AntDesign name="arrowdown" size={24} color="black" />   

          <TextTrasations>
            <Trasations>Entradas</Trasations>
            <Type>Deposito por boleto</Type>
            <Money>R$ 387,00</Money>
          </TextTrasations>
        </BoxTrasationsSigle>
      </BoxTrasations>

      <BoxTrasations>
        <TextDay>Hoje</TextDay>

        <BoxTrasationsSigle>
        <AntDesign name="arrowdown" size={24} color="black" />   

          <TextTrasations>
            <Trasations>Entradas</Trasations>
            <Type>Deposito por boleto</Type>
            <Money>R$ 387,00</Money>
          </TextTrasations>
        </BoxTrasationsSigle>
      </BoxTrasations>

      <BoxTrasations>
        <TextDay>Hoje</TextDay>

        <BoxTrasationsSigle>
        <AntDesign name="arrowdown" size={24} color="black" />   

          <TextTrasations>
            <Trasations>Entradas</Trasations>
            <Type>Deposito por boleto</Type>
            <Money>R$ 387,00</Money>
          </TextTrasations>
        </BoxTrasationsSigle>
      </BoxTrasations>
    </Container>
  )
}