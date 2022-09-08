import { calculate } from '../functions/Calculate';
import { ACTIONS } from '../constants/Actions';

export const reducer = (state, { type, payload }) => {
    const { currentNum, prevNum, op, typeOfLastInput, onholdNum } = state;

    let result;
    let newState;

    switch (type) {
        case ACTIONS.RESET:
            return { currentNum: '0' };

        // Change +/- of currentNum
        case ACTIONS.CHANGE_PLUS_MINUS:
            // if currentNum is 0, return state as it is
            if (currentNum === '0') {
                newState = state
            } else {
                newState = { ...state, currentNum: (currentNum * -1).toString() }
            }
            break;

        // Change currentNum in percentages
        case ACTIONS.CHANGE_TO_PERCENTAGE:
            newState = { ...state, currentNum: (currentNum / 100).toString() }
            break;

        // Put decimal point to currentNum
        case ACTIONS.ADD_DECIMAL_POINT:
            // if currentNum has already dicimal point, return state as it is
            if (currentNum.includes('.')) {
                newState = state
            } else {
                newState = { ...state, currentNum: `${currentNum}.` }
            }
            break;

        // Add number to currentNum
        case ACTIONS.ADD_NUMBERS:
            if (typeOfLastInput === ACTIONS.CHOOSE_OPERATION) {
                newState = { ...state, prevNum: currentNum, currentNum: (payload.input).toString() }
            }
            // if typeOfLastInput is EVALUATE, set new input to currentNum and reset all other items
            else if (typeOfLastInput === ACTIONS.EVALUATE) {
                newState = { currentNum: (payload.input).toString() }
            }
            // if beg. of currentNum is 0
            // payload.input == 0 => return state as it is
            // payload.input !== 0 => add payload.input
            else if (currentNum === '0') {
                newState = payload.input == 0 ? state
                    : { ...state, currentNum: (payload.input).toString() }
            }
            // otherwise add input to currentNum
            else {
                newState = { ...state, currentNum: `${currentNum}${payload.input}` }
            }
            break;

        case ACTIONS.CHOOSE_OPERATION:
            // Easter Egg! typeOfLastInput is set manually to start over at the next input
            if (currentNum === '0' && op === '/') {
                return { currentNum: 'YOU FOUND THE EASTER EGG!', typeOfLastInput: ACTIONS.EVALUATE }
            }
            else if (!op) {
                newState = { ...state, op: payload.input }
            }
            // if typeOfLastInput is CHOOSE_OPERATION, overwrite op by payload.input
            else if (typeOfLastInput === ACTIONS.CHOOSE_OPERATION) {
                newState = { ...state, op: payload.input }
            }
            // if both onholdNum and prevNum exist, calculate prevNum, currentNum and onholdNum together and set as currentNum. 
            else if (onholdNum && prevNum) {
                result = calculate(state)
                newState = { ...state, prevNum: currentNum, currentNum: result, onholdNum: null, onholdOp: undefined }
            }
            // if op is + or - and payload.input is x or /, put prevNum and op to onhold.
            else if (prevNum && currentNum && op === '+' || op === '-' && payload.input === 'x' || payload.input === '/') {
                newState = { ...state, onholdNum: prevNum, prevNum: null, onholdOp: op, op: payload.input }
            }
            // otherwise make prevNum out of calculated result of prevNum and currentNum and set payload.input to op
            else {
                result = calculate(state)
                newState = { prevNum: currentNum, currentNum: result, op: payload.input }
            }
            break;

        case ACTIONS.EVALUATE:
            // Easter Egg! typeOfLastInput is set manually to start over at the next input
            if (currentNum === '0' && op === '/') {
                return { currentNum: 'YOU FOUND THE EASTER EGG!', typeOfLastInput: ACTIONS.EVALUATE }
            }
            // if only currentNum exists, return state as it is
            if (!prevNum) {
                newState = state
            }
            // if both onholdNum and prevNum exist, calculate prevNum, currentNum and onholdNum together and set as currentNum. 
            else if (onholdNum && prevNum) {
                result = calculate(state)
                newState = { ...state, prevNum: currentNum, currentNum: result, onholdNum: null, onholdOp: undefined }
            }
            else {
                result = calculate(state)
                newState = { ...state, prevNum: currentNum, currentNum: result }
            }
            break;

        default:
            newState = { currentNum: 'ERROR' }
            throw new Error()
    }
    return { ...newState, typeOfLastInput: type };
}