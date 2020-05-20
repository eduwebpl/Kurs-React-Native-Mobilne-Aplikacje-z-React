import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const ListItem = ({info}) => {
  return (
    <Container>
      <InfoText>{info}</InfoText>
    </Container>
  );
};

//

const Container = styled(View)`
  width: 100%;
  height: 80px;
  background-color: gray;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const InfoText = styled(Text)`
  font-size: 20px;
`;

export default ListItem;
