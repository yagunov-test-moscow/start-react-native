import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'

import { Navbar } from './components/Navbar'
import { THEME } from './theme';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';


export const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    
//   const removeTodo = id => {

//     const todo = todos.find(t => t.id === id)

//     Alert.alert(
//       'Удаление элемента',
//       `Вы уверены, что хотите удалить "${todo.title}"?`,
//       [
//         {
//           text: 'Отмена',
//           style: 'cancel'
//         },
//         { 
//           text: 'OK', 
//           onPress: () => {
//             setTodoId(null)
//             setTodos(prev => prev.filter(todo => todo.id !== id))
//           } 
//         }
//       ],
//       { cancelable: false }
//     );
//   }

  let content = (
    <MainScreen 
    todos={ todos } 
    addTodo={ addTodo } 
    removeTodo={removeTodo}
    openTodo={changeScreen}
    />
  )
  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
    <TodoScreen
     onRemove={removeTodo} 
     goBack={() => changeScreen(null)}
     todo={selectedTodo}
     onSave={updateTodo}
     />
    )
  }


    return (
      <View>
        <Navbar title='My Buy' />
            <View style={styles.container}>{ content }</View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20
    }
  });
