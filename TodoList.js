import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
import ListItem from './ListItem';

const TodoList = () => {
  const [tasks, setTasks] = useState(['task1', 'other task', 'something..']);
  const [currentText, setCurrentText] = useState('');

  function onAddTask() {
    if (currentText.length < 3) {
      return;
    }

    setCurrentText('');

    const newElems = Array.from(Array(1000).keys()).map(
      elem => `element: ${elem}`,
    );

    setTasks(newElems);
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
          <List>
            {tasks.map(t => (
              <ListItem info={t} />
            ))}
          </List>
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

const List = styled(ScrollView)``;

export default TodoList;
