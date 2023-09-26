import { createContext, useReducer } from "react";

const listMock = [
  {
    id: "1",
    detalles: "Correr por 30 minutos",
    periodo: "día",
    eventos: 1,
    icono: "🏃",
    meta: 365,
    plazo: "2030-01-01",
    completado: 5,
  },
  {
    id: "2",
    detalles: "Leer libros",
    periodo: "año",
    eventos: 6,
    icono: "📚",
    meta: 6,
    plazo: "2030-01-01",
    completado: 0,
  },
  {
    id: "3",
    detalles:"Relajacion Jackobson",
    periodo: "mes",
    eventos: 12,
    icono: "🧘‍♀️",
    meta: 12,
    plazo: "2030-01-01",
    completado: 0,
  },
];

const initialState = {
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
      return newState;
    }
    case "create": {
      const id = Math.random();//action.goal.id;
      const newState = {
        order: [...state.order, id],
        objects: {
            ...state.objects,
            [id]: action.goal
        }
      };
      return newState;
    }
  }
}
const goals = reductor(initialState, { type: "put", goals: listMock });

export const Context = createContext(null);

function Memory({ children }) {
  const [state, send] = useReducer(reductor, goals);
  return <Context.Provider value={[state, send]}>{children}</Context.Provider>;
}

export default Memory;
