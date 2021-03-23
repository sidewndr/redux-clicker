import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {inputPlus, minus, plus, selectCounter} from "./redux/counterSlice";
import {useState} from "react";

export const App = () => {
  const [value, setValue] = useState('')

  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className={"row"}>
        <div><h1>{counter}</h1></div>
        <div className={"column"}>
          <input type="button"
                 value={"+"}
                 onClick={() => (dispatch(plus()))}
          />
          <input type="button"
                 value={"-"}
                 onClick={() => (dispatch(minus()))}
          />
        </div>
      </div>

      <div className={"row"}>
        <div className={"input"}>
          <input type="text"
                 value={value}
                 onChange={(event) => (setValue(event.target.value))}
          />
          <input type="button"
                 value={"add"}
                 onClick={() => (dispatch(inputPlus(value - 0)))}
          />
        </div>
      </div>
      </div>
  );
}

