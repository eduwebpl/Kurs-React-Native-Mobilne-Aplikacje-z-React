import React, {useEffect, useRef, useState} from 'react';
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

const {width, height} = Dimensions.get('window');

const TodoList = () => {
  const [tasks, setTasks] = useState([
    'task1',
    'other task',
    'something..',
    'last',
  ]);
  const [currentText, setCurrentText] = useState('');

  function onAddTask() {
    if (currentText.length < 3) {
      return;
    }

    setCurrentText('');

    setTasks([...tasks, currentText]);
  }

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
            renderItem={({item, index}) => <ListItem info={item} />}
            ListHeaderComponent={() => <Text>'Header'</Text>}
            ListFooterComponent={() => <Text>'Footer'</Text>}
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
