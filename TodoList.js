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
  Animated,
} from 'react-native';
import styled from 'styled-components/native';
import ListItem from './ListItem';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const [currentText, setCurrentText] = useState('');

  const {navigate} = useNavigation();

  const scrollPosAnim = useRef(new Animated.Value(0));

  //

  useEffect(() => {
    AsyncStorage.getItem('LIST').then(val => {
      if (val) {
        setTasks(JSON.parse(val));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('LIST', JSON.stringify(tasks));
  }, [tasks]);

  //

  function onAddTask() {
    if (currentText.length < 3) {
      return;
    }

    setCurrentText('');

    setTasks([...tasks, currentText]);

    navigate('ModalDetails', {info: 'New task added'});
  }

  const onItemPress = useCallback(
    itemInfo => {
      navigate('Details', {info: itemInfo});
    },
    [navigate],
  );

  //

  const scaleTransform = anim => ({
    transform: [{scaleX: anim}, {scaleY: anim}],
  });

  const addButtonScale = scrollPosAnim.current.interpolate({
    inputRange: [0, 2000],
    outputRange: [0.7, 1.2],
    extrapolateRight: 'clamp',
    extrapolateLeft: 'extend',
  });

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <TaskTextInput
            placeholder={'new task...'}
            value={currentText}
            onChangeText={setCurrentText}
          />
          <AddTaskButton
            onPress={onAddTask}
            style={scaleTransform(addButtonScale)}>
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
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {y: scrollPosAnim.current}},
                },
              ],
              {
                useNativeDriver: true,
              },
            )}
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

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity,
);
const AddTaskButton = styled(AnimatedTouchableOpacity)`
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

const List = styled(Animated.FlatList)``;

export default TodoList;
