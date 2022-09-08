import { useReducer } from 'react';
import Keypad from "./Keypad";
import Display from "./Display";

import { reducer } from '../reducer/Reducer';




function Calculator() {

    const [state, dispatch] = useReducer(reducer, { currentNum: '0' });

    //! log
    console.log(state);

    return (
        <div className="App">
            <Display
                currentNum={state.currentNum}
            />
            <Keypad
                currentNum={state.currentNum}
                dispatch={dispatch}
            />
        </div>
    );
}

export default Calculator