import { ACTIONS } from '../constants/Actions';

export const ButtonData = [
    {
        id: 'Reset',
        keyboard: 'AC',
        type: ACTIONS.RESET,
        color: "black",
        backgroundColor: "#A2A2A2"
    },
    {
        id: 'Plus-minus',
        keyboard: '+/-',
        type: ACTIONS.CHANGE_PLUS_MINUS,
        color: "black",
        backgroundColor: "#A2A2A2"

    },
    {
        id: 'Percent',
        keyboard: '%',
        type: ACTIONS.CHANGE_TO_PERCENTAGE,
        color: "black",
        backgroundColor: "#A2A2A2"

    },
    {
        id: 'Plus',
        keyboard: '+',
        type: ACTIONS.CHOOSE_OPERATION,
        color: 'white',
        backgroundColor: "#FAA12F"
    },
    {
        id: 'Minus',
        keyboard: '-',
        type: ACTIONS.CHOOSE_OPERATION,
        color: 'white',
        backgroundColor: "#FAA12F"

    },
    {
        id: 'Mult',
        keyboard: 'x',
        type: ACTIONS.CHOOSE_OPERATION,
        color: 'white',
        backgroundColor: "#FAA12F"

    },
    {
        id: 'Dev',
        keyboard: '/',
        type: ACTIONS.CHOOSE_OPERATION,
        color: 'white',
        backgroundColor: "#FAA12F"

    },
    {
        id: 'Evaluate',
        keyboard: '=',
        type: ACTIONS.EVALUATE,
        color: 'white',
        backgroundColor: "#FAA12F"

    },
    {
        id: 'Decimal-point',
        keyboard: '.',
        type: ACTIONS.ADD_DECIMAL_POINT,
        color: "#989A9E",
        backgroundColor: "#333333"
    },
]

let digits = new Array(10).fill(undefined).map((val, i) => i).sort((a, b) => (b - a));

digits.forEach((val, i) => {
    const newObj = {
        id: `Digit${i}`,
        keyboard: i,
        type: ACTIONS.ADD_NUMBERS,
        color: "#989A9E",
        backgroundColor: "#333333"

    }
    ButtonData.push(newObj);
})
