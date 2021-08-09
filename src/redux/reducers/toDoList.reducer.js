const initialState = {
  toDoList: [],
  taskDetail: {},
};

function toDoListReducer(state = initialState, action) {

  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        toDoList: [
          ...state.toDoList,
          action.payload
        ]
      }
    }
    case "DELETE_TASK": {
      const { index } = action.payload;
      const newToDoList = state.toDoList;
      newToDoList.splice(index, 1)
      return {
        ...state,
        toDoList: [
          ...newToDoList
        ]
      }
    }
    case "EDIT_TASK": {
      const { index, title, description } = action.payload;
      console.log("toDoListReducer -> action.payload", action.payload)

      const newToDoList = state.toDoList;
      newToDoList.splice(index, 1, { title: title, description: description })
      return {
        ...state,
        toDoList: [
          ...newToDoList
        ]
      }
    }

    case "GET_TASK_DETAIL": {
      const { index } = action.payload;
      const taskDetail = state.toDoList[index] ? state.toDoList[index] : {};
      console.log("toDoListReducer -> taskDetail", taskDetail)
      return {
        ...state,
        taskDetail: taskDetail,
      }
    }
    default: {
      return state
    }
  }
}
export default toDoListReducer;