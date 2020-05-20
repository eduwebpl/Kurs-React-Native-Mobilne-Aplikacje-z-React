import React, {useEffect, useRef, useState, useCallback} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
import ListItem from './ListItem';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const TodoList = () => {
  const [tasks, setTasks] = useState(
    Array.from(Array(1000).keys()).map(e => `element: ${e}`),
  );
  const [currentText, setCurrentText] = useState('');

  const {navigate} = useNavigation();

  function onAddTask() {
    if (currentText.length < 3) {
      return;
    }

    setCurrentText('');

    const newElems = Array.from(Array(1000).keys()).map(e => `element: ${e}`);

    setTasks(newElems);
  }

  const onItemPress = useCallback(
    itemInfo => {
      navigate('Details', {info: itemInfo});
    },
    [navigate],
  );

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <TaskTextInput
            placeholder={'new task...'}
            value={currentText}
            onChangeText={setCurrentText}
          />
          <AddTaskButton onPress={onAddTask}>
            <AddTaskButtonText>{'ADD'}</AddTaskButtonText>
          </AddTaskButton>
        </Header>

        <ListWrapper>
          <List
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <ListItem info={item} onItemPress={onItemPress} />
            )}
            ListHeaderComponent={() => <Text>'Header'</Text>}
            ListFooterComponent={() => <Text>'Footer'</Text>}
            windowSize={3} // memory
            removeClippedSubviews={true} // detach
            getItemLayout={(data, index) => ({
              index,
              length: 80,
              offset: 80 * index,
            })}
            initialNumToRender={20}
          />
        </ListWrapper>
      </Container>
    </SafeAreaView>
  );
};

//

const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const TaskTextInput = styled(TextInput)`
  height: 50px;
  padding: 8px;
`;

const AddTaskButton = styled(TouchableOpacity)`
  background-color: blue;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const AddTaskButtonText = styled(Text)`
  color: white;
`;

const Header = styled(View)`
  background-color: #eeeeee;
`;

const ListWrapper = styled(View)`
  flex: 1;
`;

const List = styled(FlatList)``;

export default TodoList;
