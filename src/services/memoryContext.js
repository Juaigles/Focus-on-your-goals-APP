import { createContext, useReducer } from "react";

const memory = localStorage.getItem('goals')
const initialState = memory
    ? JSON.parse(memory)
    : {
        order: [],
        objects: {},
    };

function reductor(state, action) {
  switch (action.type) {
    case "put": {
      const goals = action.goals;
      const newState = {
        order: goals.map((goal) => goal.id),
        objects: goals.reduce(
          (object, goal) => ({ ...object, [goal.id]: goal }),
          {}
        ),
      };
      localStorage.setItem('goals', JSON.stringify(newState))
      return newState;
    }
    case "create": {
      const id = String(Math.random());//action.goal.id;
      const newState = {
        order: [...state.order, id],
        objects: {
            ...state.objects,
            [id]: {id, ...action.goal}
        }
      };
      localStorage.setItem('goals', JSON.stringify(newState))
      return newState;
    };
    case "update": {
        const id = action.goal.id;
        state.objects[id] = {
            ...state.objects[id],
            ...action.goal
        }
        const newState = {...state};
        localStorage.setItem('goals', JSON.stringify(newState))
        return newState;
      };
      case "deleteGoal": {
        const id = action.id;
        const newOrder = state.order.filter(item => item !== id);
        delete state.objects[id]
        const newState = {
            order: newOrder,
            objects: state.objects
        };
        localStorage.setItem('goals', JSON.stringify(newState))
        return newState;
      };
      default:
        throw new Error();
  }
};

export const Context = createContext(null);

function Memory({ children }) {
  const [state, send] = useReducer(reductor, initialState);
  return <Context.Provider value={[state, send]}>{children}</Context.Provider>;
}

export default Memory;
