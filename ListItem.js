import React, {useEffect, useRef, useState, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const ListItem = ({info, onItemPress}) => {
  console.log('Render list item', info);

  return (
    <Container onPress={() => onItemPress(info)}>
      <InfoText>{info}</InfoText>
    </Container>
  );
};

//

const Container = styled(TouchableOpacity)`
  height: 80px;
  background-color: gray;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const InfoText = styled(Text)`
  font-size: 20px;
`;

export default memo(ListItem);
