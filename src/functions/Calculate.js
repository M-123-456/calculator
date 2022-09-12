export const calculate = ({ currentNum, prevNum, onholdNum, op, onholdOp }) => {

    const current = Number(currentNum);
    const prev = Number(prevNum);
    const onhold = Number(onholdNum);

    let result;

    switch (op) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "x":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
    }

    if (onholdNum) {
        result = onholdOp === '+' ? result + onhold : result + onhold
    }
    return result.toString();
}