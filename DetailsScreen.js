import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const DetailsScreen = props => {
  return (
    <Container>
      <InfoText>{props.route.params.info}</InfoText>
    </Container>
  );
};

//

const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const InfoText = styled(Text)`
  text-align: center;
  font-size: 30px;
`;

export default DetailsScreen;
