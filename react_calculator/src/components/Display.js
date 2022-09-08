import { formatNumber } from '../functions/formatNumber';

const Display = ( { currentNum } ) => {

    // shrinking letters to be added
    return ( 
        <div className="display">{formatNumber(currentNum)}</div>
     );
}
 
export default Display;