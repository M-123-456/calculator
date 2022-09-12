const Button = ( {item, dispatch } ) => {
    const { id, keyboard, type, color, backgroundColor } = item;

    return (
        <button
            id={id}
            style={{backgroundColor: backgroundColor, color: color}}
            onClick={() => dispatch( {type: type, payload: {input: keyboard}} )}
        >
            {keyboard}
        </button>
           
     );
}
 
export default Button;