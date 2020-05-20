import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = props => {
  const {goBack} = useNavigation();

  return (
    <Container>
      <InfoText>{props.route.params.info}</InfoText>
      <Button title={'back'} onPress={goBack} />
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
