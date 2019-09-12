import React, {useContext} from 'react';
import Context from '../Context'


const Tabla = function(props){
    const cont = useContext(Context);
    return (
        <div>
            <Context.Consumer>
                {cont.length}
            </Context.Consumer>
        </div>
        )
};

export default Tabla;