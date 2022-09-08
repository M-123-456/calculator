import Button from './Button';

import { ButtonData } from '../data/ButtonData';

const Keypad = ( { currentNum, dispatch }) => {
    return (
        <div className="keypad">
            {ButtonData.map(item => (
                <Button
                    key={item.id}
                    item={item}
                    currentNum={currentNum}
                    dispatch={dispatch}
                />
            ))}
        </div>
    );
}

export default Keypad;