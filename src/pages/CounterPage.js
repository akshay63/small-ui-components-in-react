import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

//ALL ACTION OBJECT'S TYPES PROPERTIES
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value_to_add";
const ADD_COUNT_VALUETOADD = "add-count-valueToAdd";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;

    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };

    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;

    case ADD_COUNT_VALUETOADD:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;

    default:
      //DEFUALT CASE: DUE TO COMMUNITY CONVENTION, YOU CAN EITHER THROW ERROR OR JUST RETURN STATE.

      // throw new Error("Unexpected Action type", action.type);
      return state;
  }

  // if (action.type === INCREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }
  // if (action.type === DECREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // }
  // if (action.type === SET_VALUE_TO_ADD) {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }
  // if (action.type === "add-count-valueToAdd") {
  //   return {
  //     ...state,
  //     count: state.count + state.valueToAdd,
  //     valueToAdd: 0,
  //   };
  // }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log(state);

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ADD_COUNT_VALUETOADD,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Current Count: {state.count}</h1>
      <div className="flex">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
