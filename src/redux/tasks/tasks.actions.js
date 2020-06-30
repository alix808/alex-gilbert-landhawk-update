import { GET_TASKS, COUNT_TASKS, COUNT_IS_COMPLETE } from './tasks.types';

// fetch tasks fromo the db.json file
// the setTimeout method imitates the taken to retrieve data from a real server
export const getTasks = () => async (dispatch) => {
  try {
    const res = await fetch('/tasks');
    const data = await res.json();

    setTimeout(
      () =>
        dispatch({
          type: GET_TASKS,
          payload: data,
        }),
      2000
    );
  } catch (err) {
    console.log(err);
  }
};

// this function calculates how many tasks are in the array
export const countTasks = (array) => {
  let length = array.length;

  return {
    type: COUNT_TASKS,
    payload: length,
  };
};

// this function calculates the number of completed tasks
export const countIsComplete = (array) => {
  let number = 0;

  const helperFunction = (isComplete) => {
    if (isComplete === true) {
      number++;
    }
  };

  array.forEach((t) => helperFunction(t.isComplete));

  return {
    type: COUNT_IS_COMPLETE,
    payload: number,
  };
};
